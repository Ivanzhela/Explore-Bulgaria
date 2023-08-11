import {
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormValidationDirective } from '../../form-validation.directive';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from 'src/app/feature/user/user-type';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
  providers: [FormValidationDirective],
})
export class ProfileSettingsComponent {
  @Input() user?: User | null;
  @ViewChild(FormValidationDirective)
  formValidationDirective?: FormValidationDirective;
  formErrors?: ValidationErrors | null;

  isEdit: any = {
    username: false,
    email: false,
    password: false,
  };

  usernameEditForm = this.formBuilder.group({
    username: [
      `${this.user?.username ? this.user.username : ''}`,
      [Validators.required, Validators.minLength(6)],
    ],
  });
  emailEditForm = this.formBuilder.group({
    email: [
      `${this.user?.email ? this.user.email : ''}`,
      [Validators.required, Validators.email, Validators.minLength(6)],
    ],
  });
  passwordEditForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    rePass: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}

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
      if (
        confirm(
          'Do you want to change your settings? After that, you will need to log in again!'
        )
      ) {
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
