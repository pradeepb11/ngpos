import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginpos',
  templateUrl: './loginpos.component.html',
  styleUrls: ['./loginpos.component.scss']
})
export class LoginposComponent implements OnInit {

  loginForm!: FormGroup;
  show_button: Boolean = false;
  show_eye: Boolean = false;
  submitted = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.setvalidateLoginForm();
  }

  setvalidateLoginForm(){
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)] ),
      role: new FormControl('user')
    })
  }
  get f() { return this.loginForm.controls; }

  onLoginSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.value.role === 'user'){
      this.router.navigate(['/storepos'], {relativeTo: this.route})
    }else if(this.loginForm.value.role === 'admin'){
      this.router.navigate(['/dashboard'], {relativeTo: this.route})
    }
    
  }
  showPassword() {
    console.log('Working');

   this.show_button = !this.show_button;
   this.show_eye = !this.show_eye;
 }

}
