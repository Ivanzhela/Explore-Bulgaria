import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { FormValidationDirective } from '../form-validation.directive';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
  providers: [FormValidationDirective],
})
export class LoginRegisterComponent {
  @ViewChild(FormValidationDirective)
  formValidationDirective?: FormValidationDirective;

  formErrors?: any;
  switchForm: boolean = true;

  loginForm = this.formBuilder.group({
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(6)],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  registerForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(6)],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rePass: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}

  onSwitchForm(form: FormGroup): void {
    this.switchForm = !this.switchForm;
    this.formErrors = null;
    form.reset();
  }

  onSubmit(form: FormGroup, formName: string): void {
    if (form.invalid) {
      console.log(form);
      
      this.formErrors = this.formValidationDirective?.validate(form);
    } else {
      
      this.formErrors = null;
      this.service.authUser(form.value, formName).subscribe({
        next: (v) => this.router.navigate(['/']),
        error: (e) => (this.formErrors = e.error),
      });
    }
  }
}
