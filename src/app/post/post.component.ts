import { Component } from '@angular/core';

@Component({
  selector : 'app-post',
  templateUrl : './post.component.html',
  styleUrls : ['./post.component.css', './post.component.scss'],
})

export class PostComponent {
  enteredValue = '';
  newPost = 'No Content';
  onAddPost() {
    // alert('Post Added!');
    // this.newPost = 'The user\'s post';
    this.newPost = this.enteredValue;
  }
}

