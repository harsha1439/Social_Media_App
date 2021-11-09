import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public _url = 'https://jsonplaceholder.typicode.com/albums'
  public _url2 = 'https://jsonplaceholder.typicode.com/users'
  constructor(private _http: HttpClient) { }


  getAlbum(): Observable<any[]>{
    return this._http.get<any[]>(this._url).pipe(catchError(this.errorHandler))
  }

  getUser(): Observable<any[]>{
    return this._http.get<any[]>(this._url2)
  }

  errorHandler(error){
    return throwError(error.message || "Server Error")
  }

}
