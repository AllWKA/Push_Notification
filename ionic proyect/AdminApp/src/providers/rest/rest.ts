import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../models/user';
import { Admin } from "../../models/admin";

@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
  }

  private baseUrl = 'http://192.168.0.174:3000';

  public getAdmins(): Observable<Admin> {

    return this.http.get(this.baseUrl+'/admins').pipe(
          map(this.extractData),
          catchError(this.handleError)
        );
  }




  // public logUser(name: string, pwd: string): Observable<User> {

  //   return this.http.get(this.baseUrl + '/logUser/' + name + "/" + pwd).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }

  public getUsers(): Observable<User> {

    return this.http.get(this.baseUrl + '/users').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getUser(id: number): Observable<User> {

    return this.http.get(this.baseUrl + '/user/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

  }

  public postUser(name: string, email: string, pwd: string, appId: number): Observable<User> {

    var newUser = {
      name: name,
      email: email,
      pwd: pwd,
      appId: appId
    };

    return this.http.post<User>(this.baseUrl + '/user', newUser).pipe(
      catchError(this.handleError)
    );
  }

  public delUser(id: number): Observable<User> {

    return this.http.delete(this.baseUrl + '/user/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

  }

  public putUser(id: number, name: string, email: string, pwd: string, appId: number): Observable<User> {

    var user = {
      name: name,
      email: email,
      pwd: pwd,
      appId: appId
    };

    return this.http.put<User>(this.baseUrl + '/user/' + id, user).pipe(
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {

    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
