import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

import { Property } from 'src/app/models/property';

@Injectable({
  providedIn: 'root'
})

export class PropertiesService {
  apiURLProperties = environment.apiURL + 'properties/';

  constructor(private http: HttpClient) { }

  // Getting the property from the backend
  getProperties(selectedCats?: string[]): Observable<Property[]> {
    let params = new HttpParams();
    if (selectedCats) {
        params = params.append('categories', selectedCats.join(','));
        return this.http.get<Property[]>(this.apiURLProperties, { params });
    }
    return this.http.get<Property[]>(this.apiURLProperties);
  }


  // Getting a specific property by id
  getSingleProperty(ProductId: string): Observable<Property> {
    return this.http.get<Property>(`${this.apiURLProperties}${ProductId}`);
}
// Getting a property by name
getProductByName(propertyName: string): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiURLProperties}name/${propertyName}`);
}

// Creating a Property
createProperty(propertyFormData: FormData): Observable<Property> {
    return this.http.post<Property>(this.apiURLProperties, propertyFormData);
}

  // Getting featured properties
  getFeaturedProperties(count: number): Observable<Property[]> {
      return this.http.get<Property[]>(
          `${this.apiURLProperties}get/featured/${count}`
      );
  }

  // Updating a Property
  updateProduct(
    propertyFormData: FormData,
    PropertyId: string
  ): Observable<Property> {
    //updating a specific Property
    return this.http.put<Property>(
        `${this.apiURLProperties}${PropertyId}`,
        propertyFormData
    );
  }

  // Deleting a Property
  deleteProduct(ProductId: string): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.delete<any>(`${this.apiURLProperties}${ProductId}`);
  }

  uploadProductImages(
    propertyFormData: FormData,
    ProductId: string
  ): Observable<Property> {
    return this.http.put<Property>(
        `${this.apiURLProperties}/gallery-image/${ProductId}`,
        propertyFormData
    );
  }

}
