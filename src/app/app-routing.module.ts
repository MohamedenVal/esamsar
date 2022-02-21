import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin',
    loadChildren: () =>
    import('./pages/admin/admin.module').then((m) => m.AdminModule),
  }
];


// {
//   path: '',
//   loadChildren: () =>
//     import('./pages/home/home.module').then((m) => m.HomeModule),
// },
// {
//   path: 'properties',
//   loadChildren: () =>
//     import('./pages/properties/properties.module').then((m) => m.PropertiesModule),
// },
// {
//   path: 'services',
//   loadChildren: () =>
//     import('./pages/services/services.module').then((m) => m.ServicesModule),
// },
// {
//   path: 'profile',
//   loadChildren: () =>
//     import('./pages/profile/profile.module').then((m) => m.ProfileModule),
// },
// {
//   path: 'contact',
//   loadChildren: () =>
//     import('./pages/contact/contact.module').then((m) => m.ContactModule),
// },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
