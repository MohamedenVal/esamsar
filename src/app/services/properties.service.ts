import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

import { Property } from 'src/app/models/property';

@Injectable({
  providedIn: 'root'
})

export class PropertiesService {
  apiURLProperties = environment.apiURL + 'properties';

  constructor(private http: HttpClient) { }

  // Getting the property from the backend
  getProperties(selectedCats?: string[], selectedMogatas?: string[], priceRange?: string[], rooms?: [], rent = false): Observable<Property[]> {
    let params = new HttpParams();
    if (selectedCats && selectedCats !== []) {
      params = params.append('categories', selectedCats.join(','));
    }
    if (selectedMogatas && selectedMogatas !== []) {
      params = params.append('mogatas', selectedMogatas.join(','));
    }
    if (priceRange && (priceRange[0] !== '')) {
      params = params.append('price', priceRange.join(','))
    }

    if (rooms) {
      //
    }
    if (!rent) {
      return this.http.get<Property[]>(this.apiURLProperties, { params });

    } else {
      return this.http.get<Property[]>(`${this.apiURLProperties}/rent`, { params });

    }

  }
  // Getting the property from the backend by mogata
  getByMogata(selectedCats?: string[]): Observable<Property[]> {
    let params = new HttpParams();
    params = params.append('mogatas', selectedCats!.join(','));
    return this.http.get<Property[]>(this.apiURLProperties, { params });

  }
  // Getting the property from the backend by mogata
  getByPrice(numbers: string): Observable<Property[]> {
    let params = new HttpParams();
    params = params.append('price', numbers);
    return this.http.get<Property[]>(this.apiURLProperties, { params });

  }
  // Getting the property from the backend by wilaya
  getByWilaya(selectedCats?: string[]): Observable<Property[]> {
    let params = new HttpParams();
    if (selectedCats) {
        params = params.append('wilaya', selectedCats.join(','));
        return this.http.get<Property[]>(this.apiURLProperties, { params });
    }
    return this.http.get<Property[]>(this.apiURLProperties);
  }


  // Getting a specific property by id
  getSingleProperty(ProductId: string): Observable<Property> {
    return this.http.get<Property>(`${this.apiURLProperties}/${ProductId}`);
  }
  // Getting a property by name
  getPropertyByName(propertyName: string): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiURLProperties}/name/${propertyName}`);
  }

  // Creating a Property
  createProperty(propertyFormData: FormData): Observable<Property> {
      return this.http.post<Property>(this.apiURLProperties, propertyFormData);
  }

  // Getting featured properties
  getFeaturedProperties(count: number): Observable<Property[]> {
      return this.http.get<Property[]>(
        `${this.apiURLProperties}/get/featured/${count}`
      );
  }

  // Updating a Property
  updateProperty(
    propertyFormData: FormData,
    PropertyId: string
  ): Observable<Property> {
    //updating a specific Property
    return this.http.put<Property>(
        `${this.apiURLProperties}/${PropertyId}`,
        propertyFormData
    );
  }

  // Deleting a Property
  deleteProperty(id: string): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.delete<any>(`${this.apiURLProperties}/${id}`);
  }

  uploadPropertyImages(
    propertyFormData: FormData,
    id: string
  ): Observable<Property> {
    return this.http.put<Property>(
        `${this.apiURLProperties}/gallery-image/${id}`,
        propertyFormData
    );
  }

}
