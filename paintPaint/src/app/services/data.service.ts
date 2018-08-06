import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from "../class/employee";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from "../class/country";
import { Gender } from "../class/gender";



@Injectable()
export class DataService {
    private POPULATIONENDPOINT = '/api/population';
    private DATASOURCEENDPOINT = '/api/datasource';
    results;
    constructor(private http: HttpClient){

    }
    public getPersonData(): Promise<Employee[]> {
        return this.http.get(this.POPULATIONENDPOINT).toPromise().then(
            data => data["population"]["person"] as Employee[]
        );

    }
    public getCountryData(): Promise<Country[]> {
        return this.http.get(this.DATASOURCEENDPOINT).toPromise().then(
            data => data["data"]["country"],
            catchError(this.handleError)
        );
    }
    public getGenderData(): Promise<Gender[]> {
        return this.http.get(this.DATASOURCEENDPOINT).toPromise().then(
            data => data["data"]["sex"],
            catchError(this.handleError)
        );

    }
    public getLanguageData(): Promise<Gender[]> {
        return this.http.get(this.DATASOURCEENDPOINT).toPromise().then(
            data => data["data"]["language"],
            catchError(this.handleError)
        );

    }
    public getDataSource () {
        return this.http.get(this.DATASOURCEENDPOINT).toPromise().then(
            data => data["data"],
            catchError(this.handleError)
        );       
    }
    /**
     * To handle api call error
     * @param error 
     */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
}