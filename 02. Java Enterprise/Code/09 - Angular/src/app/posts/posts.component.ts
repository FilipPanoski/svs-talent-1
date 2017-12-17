import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

    constructor(private generalService:GeneralService) { }

    posts:any;
    errors:any;

    ngOnInit() {
        this.loadPosts();
    }

    loadPosts()
    {
        this.generalService.getPosts()
        .subscribe(data => this.posts = data, error => this.errors = error);
    }

}
