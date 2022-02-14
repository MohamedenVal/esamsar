import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';
import { Mogata } from '../models/mogata';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiURLCategories = environment.apiURL + 'categories';
  apiURLMogatas = environment.apiURL + 'mogatas';

  constructor(private http: HttpClient) {}

  // Getting the categories from the backend
  getCategories(): Observable<Category[]> {
      return this.http.get<Category[]>(this.apiURLCategories);
  }

  // Getting a specific catewgory by id
  getSingleCategory(categoryId: string): Observable<Category> {
      return this.http.get<Category>(`${this.apiURLCategories}/${categoryId}`);
  }

  // Creating a category
  createCategory(category: Category): Observable<Category> {
      return this.http.post<Category>(this.apiURLCategories, category);
  }

  // Updating a category
  updateCategory(
      category: Category,
      categoryId: string
  ): Observable<Category> {
      //updating a specific category
      return this.http.put<Category>(
          `${this.apiURLCategories}/${categoryId}`,
          category
      );
  }

  // Deleting a category
  deleteCategory(categoryId: string): Observable<any> {
      return this.http.delete<any>(`${this.apiURLCategories}/${categoryId}`);
  }

  /**
   * Mogata services
   */

    // Getting the mogatas from the backend
    getMogatas(): Observable<Mogata[]> {
      return this.http.get<Mogata[]>(this.apiURLMogatas);
  }

  // Getting a specific mogata by id
  getSingleMogata(mogataId: string): Observable<Mogata> {
      return this.http.get<Mogata>(`${this.apiURLMogatas}/${mogataId}`);
  }


  // Creating a mogata
  createMogata(mogata: Mogata): Observable<Mogata> {
      return this.http.post<Mogata>(this.apiURLMogatas, mogata);
  }

  // Updating a mogata
  updateMogata(
      mogata: Mogata,
      mogataId: string
  ): Observable<Mogata> {
      //updating a specific mogata
      return this.http.put<Mogata>(
          `${this.apiURLMogatas}/${mogataId}`,
          mogata
      );
  }


  // Deleting a mogata
  deleteMogata(mogataId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLMogatas}/${mogataId}`);
  }


}
