import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  cardForm;

  constructor(private formBuilder: FormBuilder) {
    this.cardForm = this.formBuilder.group({
      firmName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]),
      userFirstName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)]),
      userLastName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)]),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      passwordForm: this.formBuilder.group({
        userPasswordInit: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(24)]),
        userPasswordConfirm: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(24)])
      })
    });
    this.cardForm.get('passwordForm')?.setValidators(SignupFormComponent.passwordMatchValidator());
  }

  ngOnInit() {

  }


  static passwordMatchValidator(): ValidatorFn {
    console.log('custom validator')
    return (form: AbstractControl): ValidationErrors | null => {


      const password: string = form.get('userPasswordInit')!.value;
      const confirmPassword: string = form.get('userPasswordConfirm')!.value;

      console.log(password, confirmPassword);

      if (password !== confirmPassword) {
        form.get('userPasswordConfirm')?.setErrors({ passwordsNotSame: true })
      }
      return null;
    }
  }



}

