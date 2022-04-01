import { PropertiesService } from 'src/app/services/properties.service';
import { PropertiesRoutingModule } from './properties-routing.module';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { PropertiesPageComponent } from './properties.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyComponent } from './property/property.component';
import { CommonModule } from '@angular/common';
import { HomeSearchComponent } from './home-search/home-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ContactButtonsComponent } from 'src/app/components/contact-buttons/contact-buttons.component';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    PropertiesPageComponent,
    PropertyDetailComponent,
    PropertiesComponent,
    PropertyComponent,
    HomeSearchComponent,
    SearchResultComponent,
    ContactButtonsComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    PropertiesService
  ],
  exports: [
    PropertiesComponent,
    HomeSearchComponent,
    PropertyComponent,
    PropertyDetailComponent,
    ContactButtonsComponent
  ]
})
export class PropertiesModule { }
