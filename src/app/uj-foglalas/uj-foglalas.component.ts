import { Component } from '@angular/core';
import { FoglalasService } from '../Services/foglalas.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-uj-foglalas',
  templateUrl: './uj-foglalas.component.html',
  styleUrls: ['./uj-foglalas.component.css']
})
export class UjFoglalasComponent implements OnInit{
  adat: any = {
    cim: '',
    datum: '',
    fo: '',
    iranyitoszam: '',
    nev: '',
  };

  constructor(private adatService: FoglalasService, private router: Router) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log(this.adat);
      this.adatService.sendAdat(this.adat).subscribe(
        (response) => {
          console.log('Az adat átment!', response);
          form.resetForm();
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Hiba történt az adatküldés során! ', error);
        }
      );
    } else {
      alert('Az űrlap hibás. Kérlek ellenőrizd az adatokat.');
    }
  }

  private formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  ngOnInit(): void {
    this.adat.datum = this.formatDate(new Date());
  }
}
