import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator, AbstractControl, FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[appPlanningFormValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PlanningFormValidationDirective,
      multi: true
    }
  ]
})
export class PlanningFormValidationDirective implements Validator {
  
  validate(control: AbstractControl): ValidationErrors | null {

    if (control instanceof FormGroup) {
      const errors: ValidationErrors = {};

      Object.keys(control.controls).forEach(controlName => {
        const childControl = control.get(controlName);
        if (childControl) {
          const controlErrors = this.getControlErrors(childControl);
          if (controlErrors) {
            errors[controlName] = controlErrors;
          }
        }
      });
      
      
      const startDate = new Date(control?.controls['startDate']?.value);
      const endDate = new Date(control?.controls['endDate']?.value);
      const today = new Date();
      
      if (startDate < today) {
        errors['startDate'] = { invalidDate: 'Start date cannot be in the past!' };
      } 
      if (endDate < today) {
        errors['endDate'] = { invalidDate: 'End date cannot be in the past!' };
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
