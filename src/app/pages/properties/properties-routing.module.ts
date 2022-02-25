import { SearchResultComponent } from './search-result/search-result.component';
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
        path: 'mogata/sell/:mogata',
        component: PropertiesComponent
      },
      {
        path: 'mogata/rent/:mogata',
        component: PropertiesComponent,
        data: {
          rent: true
        }
      },
      {
        path: 'wilaya/sell/:wilaya',
        component: PropertiesComponent,

      },
      {
        path: 'wilaya/rent/:wilaya',
        component: PropertiesComponent,
        data: {
          rent: true
        }
      },
      {
        path: 'category/sell/:category',
        component: PropertiesComponent
      },
      {
        path: 'category/rent/:category',
        component: PropertiesComponent,
        data: {
          rent: true
        }
      },
      {
        path: 'search',
        component: SearchResultComponent
      },
      {
        path: 'search/rent',
        component: SearchResultComponent,
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
