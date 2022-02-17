import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentItem } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  apiURLComments = environment.apiURL + 'comment';

  constructor(private http: HttpClient) { }

  // Getting the Comments from the backend
  getComments(): Observable<CommentItem[]> {
    return this.http.get<CommentItem[]>(this.apiURLComments);
  }

  // Getting a specific catewgory by id
  getSingleComment(commentId: string): Observable<CommentItem> {
      return this.http.get<CommentItem>(`${this.apiURLComments}/${commentId}`);
  }

  // Creating a comment
  createComment(comment: CommentItem): Observable<CommentItem> {
      return this.http.post<CommentItem>(this.apiURLComments, comment);
  }

  // Updating a comment
  updateComment(
      comment: CommentItem,
      commentId: string
  ): Observable<CommentItem> {
      //updating a specific comment
      return this.http.put<CommentItem>(
          `${this.apiURLComments}/${commentId}`,
          comment
      );
  }

  // Deleting a comment
  deleteComment(commentId: string): Observable<any> {
      return this.http.delete<any>(`${this.apiURLComments}/${commentId}`);
  }

}
