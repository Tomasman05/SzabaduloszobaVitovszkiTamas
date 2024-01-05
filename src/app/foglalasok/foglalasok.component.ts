import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css']
})
export class FoglalasokComponent {

  rooms: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/foglalasok').subscribe(
      (data) => {
        this.rooms = data;
      },
      (error) => {
        console.error('Nem jön át az adat az Api-ból:', error);
      }
    );
  }
}
