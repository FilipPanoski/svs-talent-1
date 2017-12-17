import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

    constructor(private generalService:GeneralService) { }

    users:any;
    errors:any;

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers()
    {
        this.generalService.getUsers()
        .subscribe(data => this.users = data, error => this.errors = error);
    }

}
