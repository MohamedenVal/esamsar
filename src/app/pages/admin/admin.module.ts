import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminSidbarComponent } from './admin-sidbar/admin-sidbar.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertyComponent } from './properties/property/property.component';
import { PropertyFormComponent } from './properties/property-form/property-form.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoriesListComponent } from './category/categories-list/categories-list.component';
import { CategoryComponent } from './category/category/category.component';
import { WilayaComponent } from './locations/wilaya/wilaya.component';
import { WilayasListComponent } from './locations/wilayas-list/wilayas-list.component';
import { WilayaFormComponent } from './locations/wilaya-form/wilaya-form.component';
import { MogatasListComponent } from './locations/mogatas-list/mogatas-list.component';
import { MogataFormComponent } from './locations/mogata-form/mogata-form.component';
import { MogataComponent } from './locations/mogata/mogata.component';
import { CitiesListComponent } from './locations/cities-list/cities-list.component';
import { CityComponent } from './locations/city/city.component';
import { CityFormComponent } from './locations/city-form/city-form.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminNavComponent,
    AdminSidbarComponent,
    PropertiesListComponent,
    PropertyComponent,
    PropertyFormComponent,
    CategoryFormComponent,
    CategoriesListComponent,
    CategoryComponent,
    WilayaComponent,
    WilayasListComponent,
    WilayaFormComponent,
    MogatasListComponent,
    MogataFormComponent,
    MogataComponent,
    CitiesListComponent,
    CityComponent,
    CityFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
