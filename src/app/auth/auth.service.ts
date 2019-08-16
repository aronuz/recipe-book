import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class AuthService{
    user = new Subject<User>();
    constructor(private http: HttpClient){}

    signup(email: string, password: string){
       return this.http.post('https://', {email: email, password: password}).pipe(
            catchError(this.handleError), tap(responseData => {
                this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
            })
       );
    }

    login(email: string, password: string){
        return this.http.post('https://', {email: email, password: password}).pipe(
            catchError(this.handleError), tap(responseData => {
                this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
            })
        );
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000); //time from 1970 in ms + s * 1000
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }
    private handleError(errorResponse: HttpErrorResponse){
        let errorMessage = "Unknown Error.";
        if(!errorResponse.error || !errorResponse.error.error){
             return throwError(errorMessage);
        }
        switch(errorResponse.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'Email exists!';
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email does not exists!';
            case 'INVALID_PASSWORD':
                errorMessage = 'Password is not correct!';
        }
        return throwError(errorMessage);
    }
}