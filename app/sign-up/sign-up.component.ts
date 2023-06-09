import { Component , OnInit} from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn,FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
  
    if (password && confirmPassword && password !== confirmPassword) {
      return { 
        passwordsDontMatch: true 
      }
    }
      return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
  },{validators: passwordsMatchValidator()})

  constructor(private authService: AuthenticationService, private toast: HotToastService, private router: Router ){}

  ngOnInit(): void {}

    get name() {
      return this.signUpForm.get('name');
   }
    get email() {
      return this.signUpForm.get('email');
    }
  
    get password() {
      return this.signUpForm.get('password');
    }
  
    get confirmPassword() {
      return this.signUpForm.get('confirmPassword');
    }
   
    submit(){
      if(!this.signUpForm.valid) {
        return;
      }

      const nameValue = this.signUpForm.value.name;
      const emailValue = this.signUpForm.value.email;
      const passwordValue = this.signUpForm.value.password;

      if (!nameValue || !emailValue || !passwordValue) {
        return;
      }

      this.authService.signUp(nameValue, emailValue, passwordValue).pipe(
        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading: 'Signing in...',
          error: ({message}) => '$(message)'
        })
      ).subscribe(()=>{
        this.router.navigate(['/login']);
      });
    }
  }

