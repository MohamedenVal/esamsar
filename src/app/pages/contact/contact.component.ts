import { CommentItem } from './../../models/comment';
import { CommentsService } from './../../services/comments.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;
  isSubmitted = false;
  editMode = false;
  commentId = '';

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      comment: [''],
      email: ['']
    });
  }

  // on button click for submiting creating or editing
  onSubmit() {
    let message = `
      اسم المستخدم: ${this.commentForm.username.value}
      البريد الالكتروني: ${this.commentForm.email.value}
      رقم الهاتف: ${this.commentForm.phone.value}
    `
    window.location.href=`https://api.whatsapp.com/send?phone=22222312929text=${message}`;
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const comment: CommentItem = {
      id: this.commentId,
      username: this.commentForm.username.value,
      email: this.commentForm.email.value,
      comment: this.commentForm.comment.value,
    };

    this._createComment(comment);

  }

  private _createComment(comm: CommentItem) {
    this.commentsService.createComment(comm)
    .subscribe(
      (c: CommentItem) => {
        // code show that the action has happened like toast or messaging service
        this.returnBack();
      },
      () => {
        // code show that the action has happened like toast or messaging service
      }
    );
  }
  // refactoring for getting the form controls
  get commentForm() {
    return this.form.controls;
  }

  returnBack() {
    timer(2000)
      .toPromise()
      .then(() => {
        this.location.back();
      });
  }
}
