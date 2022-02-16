import { AdminModule } from './pages/admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactComponent } from './components/contact/contact.component';
import { RevealComponent } from './animation/reveal/reveal.component';
import { SearchComponent } from './components/search/search.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainMapComponent } from './maps/main-map/main-map.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { PropertiesModule } from './pages/properties/properties.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DetailsComponent,
    ContactComponent,
    RevealComponent,
    SearchComponent,
    HeroComponent,
    MainMapComponent,
    HomeComponent,
    HomeSearchComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    PropertiesModule
  ],
  exports: [
    HeroComponent,
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
