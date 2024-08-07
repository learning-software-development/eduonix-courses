import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

 public constructor(private http: HttpClient) { }

 public getClients() {
   return this.http.get('http://localhost:3000/api/client');
  //  .map((data) => data.json());
 }
}
