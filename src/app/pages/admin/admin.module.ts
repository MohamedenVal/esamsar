import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationsService } from 'src/app/services/locations.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminSidbarComponent } from './admin-sidbar/admin-sidbar.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertyFormComponent } from './properties/property-form/property-form.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoriesListComponent } from './category/categories-list/categories-list.component';
import { WilayasListComponent } from './locations/wilayas-list/wilayas-list.component';
import { WilayaFormComponent } from './locations/wilaya-form/wilaya-form.component';
import { MogataFormComponent } from './locations/mogata-form/mogata-form.component';
import { MogatasListComponent } from './locations/mogatas-list/mogatas-list.component';
import { PropertiesService } from 'src/app/services/properties.service';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserPropertiesComponent } from './properties/user-properties/user-properties.component';
import { DemandsListComponent } from './demands/demands-list/demands-list.component';
import { DemandFormComponent } from './demands/demand-form/demand-form.component';
import { UserDemandsComponent } from './demands/user-demands/user-demands.component';

import { LoginComponent } from './users/login/login.component';
import { JwtInterceptor } from 'src/app/services/jwt.interceptor';
import { DemandsService } from 'src/app/services/demands.service';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminNavComponent,
    AdminSidbarComponent,
    PropertiesListComponent,
    PropertyFormComponent,
    CategoryFormComponent,
    CategoriesListComponent,
    WilayasListComponent,
    WilayaFormComponent,
    MogataFormComponent,
    MogatasListComponent,
    LoginComponent,
    UsersListComponent,
    UserFormComponent,
    UserPropertiesComponent,
    DemandsListComponent,
    DemandFormComponent,
    UserDemandsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [
    PropertiesService,
    CategoriesService,
    LocationsService,
    DemandsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  exports: [
    LoginComponent
  ]
})
export class AdminModule { }
