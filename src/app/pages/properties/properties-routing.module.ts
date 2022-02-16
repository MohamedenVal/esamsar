import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesPageComponent } from './properties.component';
import { PropertiesComponent } from './properties/properties.component';


const routes: Routes = [
  {
    path: '',
      component: PropertiesPageComponent ,
      children: [
        {
          path: '',
          component: PropertiesComponent
        },
        {
          path: 'properties/slug/:name',
          component: PropertyDetailComponent
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
