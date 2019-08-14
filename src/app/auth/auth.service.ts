import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient){}

    signup(email: string, password: string){
       return this.http.post('https://', {email: email, password: password}).pipe(
           catchError(errorResponse => {
               let errorMessage = "Unknown Error.";
               if(!errorResponse.error || !errorResponse.error.error){
                    return throwError(errorMessage);
               }
               switch(errorResponse.error.error.message){
                    case 'EMAIL_EXISTS':
                        errorMessage = 'Email exists!';
               }
               return throwError(errorMessage);
           })
       )
    }
}