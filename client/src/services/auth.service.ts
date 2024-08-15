import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private token: string | null = null;
  private isLoggedIn: boolean = false;

  constructor(private http:HttpClient) {}

  // Method to save token received from login
  saveToken(token: string) {
    this.token = token;
    this.isLoggedIn = true;
    // Optionally, you can save the token to local storage or a cookie for persistence
    localStorage.setItem('token', token);
  }
  
   SetRole(role:any)
  {
    localStorage.setItem('role',role);
  }
  get getRole ():string|null
  {
    return localStorage.getItem('role');
  }
  SetId(id:any)
  {
    localStorage.setItem('id',id);
  }
  get getId ():string|null
  {
    return localStorage.getItem('id');
  }
  
  // Method to retrieve login status
  get getLoginStatus(): boolean {
  
      return !!localStorage.getItem('token');
   
  }
  getToken(): string | null {
   this.token= localStorage.getItem('token');
    return this.token;
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
     this.token=null;
     this.isLoggedIn=false
   }




  //  checkServerStatus(): Observable<any> {
  //   return this.http.get('/api/status') // Example API to check server status
  //     .pipe(
  //       catchError((error) => {
  //         if (error.status === 0) { // Server down or unreachable
  //           window.location.href = '/error.html'; // Redirect to error page
  //         }
  //         return throwError(error); // Return an Observable to satisfy the catchError requirement
  //       })
  //     );
  // }
}
