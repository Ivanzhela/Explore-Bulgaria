import { Directive } from '@angular/core';
import {
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  AbstractControl,
} from '@angular/forms';

@Directive({
  selector: '[appFormValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FormValidationDirective,
      multi: true,
    },
  ],
})
export class FormValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (control instanceof FormGroup) {
      const errors: ValidationErrors = {};

      Object.keys(control.controls).forEach((controlName) => {
        const childControl = control.get(controlName);
        if (childControl) {
          const controlErrors = this.getControlErrors(childControl);
          if (controlErrors) {
            errors[controlName] = controlErrors;
          }
        }
      });

      if (
        control?.controls['rePass'] &&
        control?.controls['rePass']?.value !==
          control?.controls['password']?.value
      ) {
        errors['rePass'] = { diffPass: 'Passwords do not match!' };
      }

      return Object.keys(errors).length ? errors : null;
    }

    return null;
  }

  private getControlErrors(control: AbstractControl): ValidationErrors | null {
    if (control && control.invalid) {
      const errors: ValidationErrors = {};

      if (control.errors?.['required']) {
        errors['required'] = 'This field is required.';
      }

      if (control.errors?.['minlength']) {
        errors[
          'minlength'
        ] = `This field should have a minimum length of ${control.errors?.['minlength'].requiredLength} characters.`;
      }

      if (control.errors?.['email']) {
        errors['email'] = 'Invalid email format.';
      }

      if (control instanceof FormGroup) {
        const nestedErrors = this.validate(control);
        if (nestedErrors) {
          errors['nestedErrors'] = nestedErrors;
        }
      }

      return Object.keys(errors).length ? errors : null;
    }

    return null;
  }
}
