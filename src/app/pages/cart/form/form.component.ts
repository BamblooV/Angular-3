import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICountry } from '../models/icountryes';
import { CountryesAPIService } from '../services/countryes-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FormComponent implements OnInit {
  @Output()
  currency = new EventEmitter<ICountry>();

  constructor(private countryesService: CountryesAPIService) {}

  form = new FormGroup({
    country: new FormControl<ICountry>({} as ICountry, [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  options: ICountry[] = [];

  ngOnInit(): void {
    this.loadCountryes();
    this.form.get('country')?.valueChanges.subscribe((data) => {
      if (data) {
        this.currency.emit(data);
      }
    });
  }

  loadCountryes() {
    this.countryesService.getCountries().subscribe((data) => {
      this.options = data.map((val) => ({
        name: {
          official: val.name.official,
        },
        currencies: val.currencies,
      }));
    });
  }
}
