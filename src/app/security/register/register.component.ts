import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    nationality: ['', Validators.required],
    gender: ['', Validators.required],
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(): void {
    console.log('register');
  }
}
