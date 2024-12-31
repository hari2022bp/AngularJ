import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:44364/api/User';

  constructor(private http: HttpClient) { }
  
  addUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const addUserUrl = `${this.apiUrl}/CreateUser`;
    return this.http.post<User>(addUserUrl, user, {headers} ).pipe(
      tap(data => console.log('Error getting: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
    
  }
    
  loginUser(user: User):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const loginUrl = `${this.apiUrl}/login`;
    console.log(loginUrl);  
      return this.http.post<User>(loginUrl, user, {headers} ).pipe(
      tap(data => console.log('Error getting: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
   
  }}