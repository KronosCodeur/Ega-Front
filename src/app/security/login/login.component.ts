import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ClientInterface} from "../client-interface";
import {AuthService} from "../auth-service.service";

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
  http = inject(HttpClient);
  router = inject(Router);

  authService = inject(AuthService);
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  private apiUrl = 'http://localhost:8080/ega/api/v1/auth/authenticate';

  onSubmit(): void {
    this.http.post<ClientInterface>(this.apiUrl, this.form.getRawValue(),).subscribe(
      (response) => {
        console.log(response);
        console.log('Helloo', response.token);
        this.authService.currentClientSig.set(response);
        this.router.navigateByUrl('/dashboard').then();
      }
    );
  }
}
