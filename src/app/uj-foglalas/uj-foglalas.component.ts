import { Component } from '@angular/core';
import { FoglalasService } from '../Services/foglalas.service';

@Component({
  selector: 'app-uj-foglalas',
  templateUrl: './uj-foglalas.component.html',
  styleUrls: ['./uj-foglalas.component.css']
})
export class UjFoglalasComponent {
  adat:any = {};

  constructor(private adatService: FoglalasService) {}

  onSubmit(): void {
    this.adatService.sendAdat(this.adat).subscribe(
      (response) => {
        console.log('Az adat átment!', response);
      },
      (error) => {
        console.error('Hiba történt az adatküldés során! ', error);
      }
    );
  }
}
