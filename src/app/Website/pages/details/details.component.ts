import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from 'src/app/models/countries.model';
import { CountriesService } from 'src/app/services/countries.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  countryName: string | null = null
  country: Country[] | null = null


  constructor(
    private router: ActivatedRoute,
    private countriesService: CountriesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.router.paramMap
    .pipe(
      switchMap(params => {
        this.countryName = params.get('name');
        if (this.countryName) {
          return this.countriesService.getOne(this.countryName)
        }
        return [null]
      })
    )
    .subscribe(data => {
      this.country = data
    })
  }

  onBack(){
    this.location.back()
  }
}
