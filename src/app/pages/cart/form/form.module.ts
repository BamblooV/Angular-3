import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ICountryesToken } from '../models/icountryes';
import { CountryesAPIService } from '../services/countryes-api.service';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormComponent],
  providers: [{ provide: ICountryesToken, useClass: CountryesAPIService }],
})
export class FormModule {}
