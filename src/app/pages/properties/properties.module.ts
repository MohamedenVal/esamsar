import { PropertiesService } from 'src/app/services/properties.service';
import { PropertiesRoutingModule } from './properties-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PropertiesPageComponent } from './properties.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyComponent } from './property/property.component';
import { FeaturedPropertyComponent } from './featured-property/featured-property.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PropertiesPageComponent,
    PropertyDetailComponent,
    PropertiesComponent,
    PropertyComponent,
    FeaturedPropertyComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    HttpClientModule
  ],
  providers: [
    PropertiesService
  ],
  exports: [
    PropertiesComponent
  ]
})
export class PropertiesModule { }
