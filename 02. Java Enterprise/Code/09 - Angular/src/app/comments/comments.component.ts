import { Component, OnInit, Input } from '@angular/core';

import { GeneralService } from '../general.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styles: []
})
export class CommentsComponent implements OnInit {


    @Input() postId:number = 0;

    comments:any;

    constructor(private generalService:GeneralService) { }

    ngOnInit() {
        this.loadCommentsPerPost(this.postId);
    }

    loadCommentsPerPost(id:number)
    {
      this.generalService.getPostComments(id)
      .subscribe(data => this.comments = data);
    }

}
