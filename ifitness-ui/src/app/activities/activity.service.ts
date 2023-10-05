import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activitiesUrl = 'http://localhost:8000/activites'

  constructor(private http:HttpClient) { }

  list(): Promise<any> {
    return this.http.get(`${this.activitiesUrl}`)
    .toPromise()
    .then(response => {
      return response;
    })
  }

}
