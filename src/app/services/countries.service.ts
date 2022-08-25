import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/countries.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl: string = 'https://restcountries.com/v3.1'
  darkMode: boolean = true
  private myDarkMode = new BehaviorSubject<boolean>(false)
  myDarkMode$ = this.myDarkMode.asObservable()

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<Country[]>(`${this.apiUrl}/all`)
  }

  onDarkMode() {
    this.darkMode = !this.darkMode
    this.myDarkMode.next(true)
  }

  getOne(name: string){
    return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`)
  }

  getByRegion(region: string) {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
  }
}
