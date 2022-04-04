import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { PropertiesModule } from 'src/app/pages/properties/properties.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MapsComponent } from './pages/maps/maps.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DemamdsComponent } from './pages/demands/demamds.component';
import { DemandComponent } from './pages/demands/demand/demand.component';
import { DemandDetailComponent } from './pages/demands/demand-detail/demand-detail.component';
import { UserDemandComponent } from './pages/demands/user-demand/user-demand.component';
import { ContactButtonsComponent } from './components/contact-buttons/contact-buttons.component';
import { ServicesComponent } from './pages/services/services.component';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    HeroComponent,
    ContactComponent,
    MapsComponent,
    DemandComponent,
    DemandDetailComponent,
    UserDemandComponent,
    DemamdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PropertiesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
