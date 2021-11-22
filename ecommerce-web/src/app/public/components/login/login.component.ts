import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filterAnimationsByUpdatedProperties } from '@cds/core/internal';
import BaseComponent from 'src/app/shared/base-component';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { passwordMustBeStrongValidator } from 'src/app/shared/validators/password-validator';
import { LoginModel } from 'src/models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  extends BaseComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private fb:FormBuilder,private loadingService:LoadingService) {
    super()
    this.loginFormGroup = this.fb.group({
      email:'',
      password:'',
      rememberMe:false
    });
  }

  get emailIsValid () {
    return this.loginFormGroup.get("email")?.invalid && this.loginFormGroup.get("email")?.touched;
  }

  get passwordIsValid () {
    return this.loginFormGroup.get("password")?.invalid && this.loginFormGroup.get("password")?.touched;
  }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(){
    this.loginFormGroup.get("email")?.setValidators([Validators.email,Validators.required,Validators.maxLength(256)]);
    this.loginFormGroup.get("password")?.setValidators([Validators.required,passwordMustBeStrongValidator()]);
  }

  onSubmit(data:LoginModel) {
    this.isInProcess = true;
    console.log(data.email);
    console.log(data.password);
    this.loadingService.isLoading = true;
    setTimeout(() => {
      this.isInProcess = false;
      this.loadingService.isLoading = false;
    }, 2000);
  }
}
