import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/countries.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  countries: Country[] = []
  backUpCountries: Country[] = []

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.countriesService.getAll()
    .subscribe(data => {
      this.countries = data;
      this.backUpCountries = data
    })
  }


  onFilteredCountry(query: string) {
    const busqueda = query.toLowerCase()
    if(busqueda == '') {
      this.countries = this.backUpCountries
    } else {
      this.countries = this.countries.filter(country => {
        const nombre = country.name.common.toLowerCase();
        return nombre.includes(busqueda)
      })
    }
  }

  toTop() {
    window.scrollTo(0, 0)
  }
}
