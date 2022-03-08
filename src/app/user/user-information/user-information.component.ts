import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/repository.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  firstName:string = "";
  lastName:string = "";
  



  constructor() { }

  ngOnInit(): void {
  }

  getUserFirstName(form: NgForm){
    let newFirstName = form.form.value.firstName;
    this.firstName = `, ${newFirstName}`;
  }

  getUserLastName(form: NgForm){
    let newLastName = form.form.value.lastName;
    this.lastName = `${newLastName}`;
  }


}
