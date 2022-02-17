import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesPageComponent } from './properties.component';
import { PropertiesComponent } from './properties/properties.component';


const routes: Routes = [
  {
    path: 'properties',
    component: PropertiesPageComponent ,
    children: [
      {
        path: '',
        component: PropertiesComponent
      },
      {
        path: 'properties/:id',
        component: PropertyDetailComponent
      },
      {
        path: 'properties/slug/:name',
        component: PropertyDetailComponent
      },
      {
        path: 'mogata/:mogataid',
        component: PropertiesComponent
      },
      {
        path: 'wilaya/:wilayaid',
        component: PropertiesComponent
      },
      {
        path: 'category/:categoryid',
        component: PropertiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
