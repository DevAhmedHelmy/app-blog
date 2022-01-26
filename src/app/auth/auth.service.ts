import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  signup() {
    const apiUrl =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]';
    // this._http.post(apiUrl);
  }
}
