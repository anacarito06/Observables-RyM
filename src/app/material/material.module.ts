import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule
    
    
  ],
  exports: [
    MatButtonModule, 
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule
    
  ]
})

export class MaterialModule { }
