import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
pseudo: string;
user: User;
constructor( private userService: UserService) { }

  ngOnInit() {
    this.user= new User();
  }
  CreateRecord() {
    const record = {};
    record['pseudo'] =this.user.pseudo;
 
    this.userService.create_NewUser(record).then(resp => {
    window.location.replace('');
    console.log(resp);
 
       })
         .catch(error => {
           console.log(error);
         });
       }
}
