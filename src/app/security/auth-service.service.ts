import {Injectable, signal} from '@angular/core';
import {ClientInterface} from "./client-interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentClientSig = signal<ClientInterface | undefined | null>(undefined);
}
