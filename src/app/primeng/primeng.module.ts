import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DividerModule
  ]
})
export class PrimengModule { }
