import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../security/auth-service.service";
import {ClientInterface} from "../../../security/client-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);
  data!: ClientInterface;
  router = inject(Router)


  ngOnInit(): void {
    this.data = this.authService.currentClientSig()!;
  }

}
