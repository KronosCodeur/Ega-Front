import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Account} from "../account/account";
import {Router} from "@angular/router";
import {AuthService} from "../../../security/auth-service.service";
import {TransactionResponse} from "./transactionResponse";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit {
  http = inject(HttpClient);
  accounts!: Account[];
  userId!: string;
  fb = inject(FormBuilder);
  router = inject(Router);
  url!: string;
  transactionResponse: TransactionResponse = new TransactionResponse("", true);
  type!: string;
  authService = inject(AuthService);
  formOperation = this.fb.nonNullable.group({
    amount: ['', Validators.required],
    type: ['', Validators.required],
    account: ['', Validators.required],
    destination: ['', Validators.required],
  })

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Account[]>('http://localhost:8080/ega/api/v1/accounts').subscribe(
      (response) => {
        this.accounts = response;
        console.log(this.accounts);
        var id = localStorage.getItem('userId');
        if (id !== null) {
          this.userId = id;
        }
        console.log(this.userId);
      }
    )
  }

  makeOperation() {
    console.log(this.formOperation.getRawValue())
    var number = this.formOperation.getRawValue().account;
    var type = this.formOperation.getRawValue().type;
    var amount = this.formOperation.getRawValue().amount;
    var destination = this.formOperation.getRawValue().destination;
    if (type === "0") {
      this.url = `http://localhost:8080/ega/api/v1/deposit?number=${number}&amount=${amount}`;
    } else if (type === "1") {
      this.url = `http://localhost:8080/ega/api/v1/withdrawal?number=${number}&amount=${amount}`;
    } else {
      this.url = `http://localhost:8080/ega/api/v1/transfer?source=${number}&destination=${destination}&amount=${amount}`;
    }
    this.http.get<TransactionResponse>(this.url).subscribe(
      (response) => {
        console.log(response);
        this.transactionResponse = response;
      },
    )

  }
}
