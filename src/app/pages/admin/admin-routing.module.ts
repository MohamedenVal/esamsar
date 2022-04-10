import { LoginComponent } from './users/login/login.component';
import { MogataFormComponent } from './locations/mogata-form/mogata-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { WilayasListComponent } from './locations/wilayas-list/wilayas-list.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './category/categories-list/categories-list.component';
import { PropertyFormComponent } from './properties/property-form/property-form.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { WilayaFormComponent } from './locations/wilaya-form/wilaya-form.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { MogatasListComponent } from './locations/mogatas-list/mogatas-list.component';
import { UserPropertiesComponent } from './properties/user-properties/user-properties.component';
import { DemandsListComponent } from './demands/demands-list/demands-list.component';
import { DemandFormComponent } from './demands/demand-form/demand-form.component';
import { UserDemandsComponent } from './demands/user-demands/user-demands.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
      component: AdminComponent,
      canActivate: [AuthGuard],
      children: [
          {
            path: '',
            component: DashboardComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'properties',
            component: PropertiesListComponent
          },
          {
            path: 'properties/users',
            component: UserPropertiesComponent
          },
          {
            path: 'mogatas',
            component: MogatasListComponent
          },
          {
            path: 'mogatas/form',
            component: MogataFormComponent
          },
          {
            path: 'users',
            component: UsersListComponent
          },
          {
            path: 'users/form',
            component: UserFormComponent
          },
          {
            path: 'users/form/:id',
            component: UserFormComponent
          },
          {
            path: 'properties/form',
            component: PropertyFormComponent
          },
          {
            path: 'properties/form/:id',
            component: PropertyFormComponent
          },
          {
            path: 'properties/users/form/:id',
            component: PropertyFormComponent,
            data: {
              user: true
            }
          },
          {
            path: 'categories',
            component: CategoriesListComponent
          },
          {
            path: 'categories/form',
            component: CategoryFormComponent
          },
          {
            path: 'categories/form/:id',
            component: CategoryFormComponent
          },
          {
            path: 'wilayas',
            component: WilayasListComponent
          },
          {
            path: 'wilayas/form',
            component: WilayaFormComponent
          },
          {
            path: 'wilayas/form/:id',
            component: WilayaFormComponent
          },
          {
            path: 'demands',
            component: DemandsListComponent
          },
          {
            path: 'demands/users',
            component: UserDemandsComponent
          },
          {
            path: 'demands/form',
            component: DemandFormComponent
          },
          {
            path: 'demands/form/:id',
            component: DemandFormComponent
          },
          {
            path: 'demands/users/form/:id',
            component: DemandFormComponent,
            data: {
              user: true
            }
          },

      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
