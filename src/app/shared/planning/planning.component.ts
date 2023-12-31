import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Destination } from 'src/app/feature/destination/destination-type';
import { UserService } from 'src/app/feature/user/user.service';
import { PlanningFormValidationDirective } from './planning-form-validation.directive';
import { PlanningService } from './planning.service';
import { User } from 'src/app/feature/user/user-type';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  providers: [PlanningFormValidationDirective],
})
export class PlanningComponent implements OnChanges, OnInit {
  @ViewChild(PlanningFormValidationDirective)
  planningFormValidationDirective?: PlanningFormValidationDirective;
  @Input() destination?: Destination;
  @Input() customClass?: string;
  isShowPlanningForm = false;
  formErrors?: ValidationErrors | null | undefined;
  user?: User | null;

  planningForm = this.formBuilder.group({
    destination: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
  });

  constructor(
    private userService: UserService,
    private service: PlanningService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.userService.getUser().subscribe((u) => {
      this.user = u;
    });
  }

  ngOnChanges(): void {
    if (this.destination) {
      this.planningForm.patchValue({
        destination: this.destination.name,
      });
    }
  }
  showPlanningForm(value: boolean) {
    if (value == false) {
      this.formErrors = null;
    }

    this.userService.getUser().subscribe((user) => {
      if (user == null && value == true) {
        this.isShowPlanningForm = false;
        this.router.navigate(['/user/auth']);
      } else {
        this.isShowPlanningForm = value;
      }
    });
  }

  onSubmit(form: FormGroup): void {
    if (form.invalid) {
      this.formErrors = this.planningFormValidationDirective?.validate(form);
    } else {
      this.formErrors = null;
      this.service
        .getPlanningDestination({ ...form.value, userId: this.user?._id })
        .subscribe({
          next: (u: any) => {
            console.log(u);
            
            this.userService.setUser(u);
            this.router.navigate([`/user/profile/${u._id}`]);
          },
          error: (e) => console.log(e),
        });
    }
  }
}
