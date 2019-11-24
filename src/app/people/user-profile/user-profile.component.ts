import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ActivatedRoute, Params } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
public user:any;
public userId:string;
  constructor(private activatedRoute:ActivatedRoute,private peopleService: PeopleService) { 
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      this.peopleService.getUser(this.userId).subscribe(user=>this.user=user);});
  }

  

}
