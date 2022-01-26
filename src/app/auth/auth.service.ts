import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface AuthDataResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  signup(email: string, password: string) {
    const apiUrl =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAAk7ui6DZDPScZccAM2L_joYq16S5pJXE';
    return this._http.post<AuthDataResponse>(apiUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
