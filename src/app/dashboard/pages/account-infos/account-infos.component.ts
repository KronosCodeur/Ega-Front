import {Component, inject, OnInit} from '@angular/core';
import {Account} from "../account/account";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-infos',
  standalone: true,
  imports: [],
  templateUrl: './account-infos.component.html',
  styleUrl: './account-infos.component.css'
})
export class AccountInfosComponent implements OnInit {
  http = inject(HttpClient);
  accounts!: Account[];
  userAccounts!: Account[];
  router = inject(Router);
  account!: string;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Account[]>('http://localhost:8080/ega/api/v1/accounts').subscribe(
      (response) => {
        this.accounts = response;
        console.log(this.accounts);
        var id = localStorage.getItem('account');
        if (id !== null) {
          this.account = id;
        }
        console.log(this.account);
      }
    )
  }
}
