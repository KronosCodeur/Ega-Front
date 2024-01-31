import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AccountCreationRequest} from "./accountCreationRequest";
import {HttpClient} from "@angular/common/http";
import {data} from "autoprefixer";
import {Account} from "../account/account";

@Component({
  selector: 'app-account-creation',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './account-creation.component.html',
  styleUrl: './account-creation.component.css'
})
export class AccountCreationComponent {

  http = inject(HttpClient);
  fb = inject(FormBuilder);
  router = inject(Router);
  data = new AccountCreationRequest("", 0);

  form = this.fb.nonNullable.group({
    type: ['', Validators.required],
  });


  create() {
    this.data.type = this.form.getRawValue().type;
    this.data.userId = parseInt(localStorage.getItem('userId')!);
    var apiUrl = 'http://localhost:8080/ega/api/v1/accounts';


    this.http.post<Account>(apiUrl, data,).subscribe(
      (response) => {
        this.router.navigateByUrl('/dashboard/account').then();
      }
    );
  }
}
