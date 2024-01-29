import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  })
  onSubmit():void {
    console.log('login');
  }
}
