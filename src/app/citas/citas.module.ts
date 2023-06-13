import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalCitasService } from './local-citas.service';

@NgModule({
  providers: [LocalCitasService],
  imports: [
    CommonModule
  ],
})

export class CitasModule { }
