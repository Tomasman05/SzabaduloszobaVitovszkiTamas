import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoglalasService {

  private apiUrl = 'localhost:3000/';

  constructor(private http: HttpClient) {}

  sendAdat(adat: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}foglalasok`, adat);
  }
}
