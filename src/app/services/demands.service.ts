import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Demand } from '../models/demand.model';

@Injectable({
  providedIn: 'root'
})
export class DemandsService {

  apiURLDemands = environment.apiURL + 'demand';

  constructor(private http: HttpClient) { }

  // Getting the Demands from the backend
  getDemands(): Observable<Demand[]> {
    return this.http.get<Demand[]>(this.apiURLDemands);
  }

  getUsersDemands(): Observable<Demand[]> {
    return this.http.get<Demand[]>(`${this.apiURLDemands}/users`);
  }

  // Getting a specific catewgory by id
  getSingleDemand(demandId: string): Observable<Demand> {
    return this.http.get<Demand>(`${this.apiURLDemands}/${demandId}`);
  }
  // Getting a specific catewgory by id
  getSingleUserDemand(demandId: string): Observable<Demand> {
    return this.http.get<Demand>(`${this.apiURLDemands}/users/${demandId}`);
  }

  // Creating a demand
  createDemand(demand: Demand): Observable<Demand> {
    return this.http.post<Demand>(this.apiURLDemands, demand);
  }
  // Creating a demand
  createUserDemand(demand: Demand): Observable<Demand> {
    return this.http.post<Demand>(`${this.apiURLDemands}/users`, demand);
  }

  // Updating a demand
  updateDemand(
      demand: Demand,
      demandId: string
  ): Observable<Demand> {
      //updating a specific demand
      return this.http.put<Demand>(
          `${this.apiURLDemands}/${demandId}`,
          demand
      );
  }

  // Deleting a demand
  deleteDemand(demandId: string): Observable<any> {
      return this.http.delete<any>(`${this.apiURLDemands}/${demandId}`);
  }
}
