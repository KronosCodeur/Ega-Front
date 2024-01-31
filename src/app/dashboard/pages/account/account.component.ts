import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "./account";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  http = inject(HttpClient);
  accounts!: Account[];
  userAccounts!: Account[];
  userId!: string;


  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Account[]>('https://ega-api.onrender.com/ega/api/v1/accounts').subscribe(
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
}
