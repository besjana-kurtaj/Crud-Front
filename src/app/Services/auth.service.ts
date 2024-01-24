import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string="https://localhost:7104/api/User/"
  constructor(private http: HttpClient) { }
  signUp(userobj:any){
  return this.http.post<any>(`${this.baseUrl}register`,userobj)
  }
  login(login:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,login)

  }
}
