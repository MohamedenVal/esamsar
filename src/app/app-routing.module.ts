import { MapsComponent } from './pages/maps/maps.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { DemamdsComponent } from './pages/demands/demamds.component';
import { DemandDetailComponent } from './pages/demands/demand-detail/demand-detail.component';
import { UserDemandComponent } from './pages/demands/user-demand/user-demand.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'add',
    component: ServicesComponent
  },
  {
    path: 'demand',
    component: DemamdsComponent
  },
  {
    path: 'demand/:id',
    component: DemandDetailComponent
  },
  {
    path: 'تقديم-طلب',
    component: UserDemandComponent
  },
  {
    path: 'onmap/:name',
    component: MapsComponent
  },
  {
    path: 'admin',
    loadChildren: () =>
    import('./pages/admin/admin.module').then((m) => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
