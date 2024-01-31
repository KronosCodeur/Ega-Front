import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "./account";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

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
  router = inject(Router);
  userId!: string;
  dialog: MatDialog

  constructor(dialog: MatDialog) {
    this.dialog = dialog;
  }

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

  goToInfo(id: number) {
    localStorage.setItem('account', id.toString());
    this.router.navigateByUrl('/dashboard/account/info').then();
  }
}

