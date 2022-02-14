import { PropertiesRoutingModule } from './properties-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesPageComponent } from './properties.component';



@NgModule({
  declarations: [
    PropertiesPageComponent
  ],
  imports: [
    CommonModule,
    // PropertyComponent,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
