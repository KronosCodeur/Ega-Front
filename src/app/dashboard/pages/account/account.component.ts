import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  http = inject(HttpClient);
  data: any;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get('http://localhost:8080/ega/api/v1/accounts').subscribe(
      (response) => {
        console.log(response);
        this.data = response;
      }
    )
  }
}
