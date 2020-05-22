import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from './Dog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) {
  }

  getDogs(baseUrl: string): Observable<Dog[]>{
    return this.http.get<Dog[]>(baseUrl + '/dogs');
  }
}
