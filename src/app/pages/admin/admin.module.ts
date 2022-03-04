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

import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { LoginComponent } from './users/login/login.component';
import { JwtInterceptor } from 'src/app/services/jwt.interceptor';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserPropertiesComponent } from './properties/user-properties/user-properties.component';

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
    UserPropertiesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RichTextEditorModule
  ],
  providers: [
    PropertiesService,
    CategoriesService,
    LocationsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  exports: [
    LoginComponent
  ]
})
export class AdminModule { }
