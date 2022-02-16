import { Wilaya } from 'src/app/models/wilaya';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {


  apiURLWilayas = environment.apiURL + 'wilayas';

  constructor(private http: HttpClient) {}


  // Updating a wilaya
  updateWilays(
      wilaya: Wilaya,
      wilayaId: string
  ): Observable<Wilaya> {
      //updating a specific wilaya
      return this.http.put<Wilaya>(
          `${this.apiURLWilayas}/${wilayaId}`,
          wilaya
      );
  }

  // Getting a specific wilaya by id
  getSingleWilaya(wilayaId: string): Observable<Wilaya> {
    return this.http.get<Wilaya>(`${this.apiURLWilayas}/${wilayaId}`);
  }

  // Getting the mogatas from the backend
  getWilayas(): Observable<Wilaya[]> {
    return this.http.get<Wilaya[]>(this.apiURLWilayas);
  }


  // Creating a wilaya
  createWilaya(wilaya: Wilaya): Observable<Wilaya> {
      return this.http.post<Wilaya>(this.apiURLWilayas, wilaya);
  }





  // Deleting a wilaya
  deleteWilaya(wilayaId: string): Observable<any> {
      return this.http.delete<any>(`${this.apiURLWilayas}/${wilayaId}`);
  }
}
