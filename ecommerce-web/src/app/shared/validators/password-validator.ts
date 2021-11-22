import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMustBeStrongValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    /**
     *  - at least 8 characters
     *  - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
     *  - Can contain special characters
     */
    const regexStrongValidation = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
    const validatioResult = regexStrongValidation.test(control.value);
    return validatioResult ? null : { password: !validatioResult }
  }

}
