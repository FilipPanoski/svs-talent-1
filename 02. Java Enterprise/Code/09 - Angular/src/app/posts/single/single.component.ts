import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(private generalService:GeneralService,
              private router:ActivatedRoute) { }

  postData:any;
  postId:number;

  ngOnInit() {
      this.router.params.subscribe( params =>
      {
          this.postId = +params['id'];
          this.loadSinglePost(this.postId);
      });
  }

  loadSinglePost(id:number)
  {
      this.generalService.getPostById(id)
      .subscribe(data => this.postData = data);
  }

}
