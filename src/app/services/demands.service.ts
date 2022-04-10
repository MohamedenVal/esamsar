import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Demand } from '../models/demand.model';

@Injectable({
  providedIn: 'root'
})
export class DemandsService {

  apiURLDemands = environment.apiURL + 'demand';
  userDemandsApi = this.apiURLDemands + '/users';

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

  // Creating a user demand
  createUserDemand(demand: Demand): Observable<Demand> {
    return this.http.post<Demand>(this.userDemandsApi, demand);
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

  // Updating a demand
  updateUserDemand(
      demand: Demand,
      demandId: string
  ): Observable<Demand> {
      //updating a specific demand
      return this.http.put<Demand>(
          `${this.userDemandsApi}/${demandId}`,
          demand
      );
  }

  // Deleting a demand
  deleteDemand(demandId: string): Observable<any> {
      return this.http.delete<any>(`${this.apiURLDemands}/${demandId}`);
  }

  // Deleting a demand
  deleteUserDemand(demandId: string): Observable<any> {
      return this.http.delete<any>(`${this.userDemandsApi}/${demandId}`);
  }

  // Adding demand to the public list
  validateDemand(id: string): Observable<any> {
    let prams = {};
    return this.http.post<any>(`${this.apiURLDemands}/validate/${id}`, prams);
  }
}
