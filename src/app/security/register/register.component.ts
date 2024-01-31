import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";

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
  http = inject(HttpClient);
  router = inject(Router);
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    nationality: ['', Validators.required],
    gender: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: ['', Validators.required],
    address: ['', Validators.required],
    firstName: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required]
  })


  private apiUrl = 'https://ega-api.onrender.com/ega/api/v1/auth/register';

  register(): void {
    this.http.post<{ message: string }>(this.apiUrl, this.form.getRawValue(),).subscribe(
      (response) => {
        console.log(response.message);
        this.router.navigateByUrl('/').then();
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
