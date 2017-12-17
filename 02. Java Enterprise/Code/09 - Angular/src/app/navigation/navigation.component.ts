import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: []
})
export class NavigationComponent implements OnInit {

  constructor(private generalService:GeneralService) { }

  data:any;

  ngOnInit() {
      
  }

  postNow():void
  {
      this.generalService.postNewPost(1, 'Title of the post', 'This is some body')
      .subscribe(data => this.data = data);
  }

}
