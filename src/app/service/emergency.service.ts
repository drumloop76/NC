import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = '/api/getAllEmergencies';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {

  constructor(private http: HttpClient) { }

  getAllEmergencies(): Observable<any> {
    return this.http.get(`${baseURL}`)
  }
}
