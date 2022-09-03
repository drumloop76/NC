import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EmergencyList } from '../main/model/emergency-list.model';

const baseURL = '/api/getAllEmergencies';

@Injectable({
  providedIn: 'root'
})

export class EmergencyService {

  constructor(private http: HttpClient) { }

  getAllEmergencies(): Observable<EmergencyList> {
    return this.http.get(`${baseURL}`).pipe(map((data: any) => {
      return new EmergencyList(data);
    }))
  }

}
