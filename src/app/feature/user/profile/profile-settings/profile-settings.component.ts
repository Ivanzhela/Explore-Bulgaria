import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { User } from 'src/app/types/user';
import { FormValidationDirective } from '../../form-validation.directive';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
  providers: [FormValidationDirective],
})
export class ProfileSettingsComponent implements OnChanges, OnInit {
  @Input() user?: User | null;
  @ViewChild(FormValidationDirective)
  formValidationDirective?: FormValidationDirective;
  formErrors?: any;
  isEdit: any = {
    username: false,
    email: false,
    password: false,
  };
  usernameEditForm: FormGroup | any;
  emailEditForm: FormGroup | any;
  passwordEditForm: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log(this.user);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.user);
    this.usernameEditForm = this.formBuilder.group({
      username: [
        `${this.user?.username ? this.user.username : ''}`,
        [Validators.required, Validators.minLength(6)],
      ],
    });
    this.emailEditForm = this.formBuilder.group({
      email: [
        `${this.user?.email ? this.user.email : ''}`,
        [Validators.required, Validators.email, Validators.minLength(6)],
      ],
    });
    this.passwordEditForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      rePass: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onEdit(input: string, form: FormGroup) {
    this.isEdit[input] = !this.isEdit[input];

    Object.keys(this.isEdit).map((i) => {
      if (this.isEdit[i] == false) {
        form.reset();
        if (this.formErrors && this.formErrors[i]) {
          delete this.formErrors[i];
        }
      }
    });
  }

  onSave(form: FormGroup): void {
    if (form.invalid) {
      this.formErrors = this.formValidationDirective?.validate(form);
    } else {
      if (confirm('Do you want to change your settings? After that, you will need to log in again!')) {
        this.formErrors = null;
        this.service.setUserData(form.value).subscribe({
          complete: () => {
            Object.keys(this.isEdit).map((i) => (this.isEdit[i] = false));
          },
        });
        this.service.logoutUser();
        this.router.navigate(['/user/auth']);
      }
    }
  }
}
