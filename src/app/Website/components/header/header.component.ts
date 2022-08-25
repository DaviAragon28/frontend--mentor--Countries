import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  light: boolean = false
  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {

  }

  onDarkMode() {
    this.light = !this.light
  }
}
