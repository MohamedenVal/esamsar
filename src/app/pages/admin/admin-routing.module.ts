import { WilayasListComponent } from './locations/wilayas-list/wilayas-list.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './category/categories-list/categories-list.component';
import { PropertyFormComponent } from './properties/property-form/property-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'properties',
        component: PropertiesListComponent
      },
      {
        path: 'properties/form',
        component: PropertyFormComponent
      },
      {
        path: 'categories',
        component: CategoriesListComponent
      },
      {
        path: 'wilayas',
        component: WilayasListComponent
      },
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
