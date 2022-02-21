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
        path: 'sell',
        component: PropertiesComponent
      },
      {
        path: 'rent',
        component: PropertiesComponent,
        data: {
          rent: true
        }
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
        path: 'mogata/sell/:mogataid',
        component: PropertiesComponent
      },
      {
        path: 'mogata/rent/:mogataid',
        component: PropertiesComponent,
        data: {
          rent: true
        }
      },
      {
        path: 'wilaya/sell/:wilayaid',
        component: PropertiesComponent,

      },
      {
        path: 'wilaya/rent/:wilayaid',
        component: PropertiesComponent,
        data: {
          rent: true
        }
      },
      {
        path: 'category/sell/:categoryid',
        component: PropertiesComponent
      },
      {
        path: 'category/rent/:categoryid',
        component: PropertiesComponent,
        data: {
          rent: true
        }
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
