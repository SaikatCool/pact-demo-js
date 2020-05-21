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

  getDogs(): Observable<Dog[]>{
    return this.http.get<Dog[]>(environment.api_end_point + '/dogs');
  }
}
