import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/repository.service';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {


  userList: any;
  firstName:string = "";
  lastName:string = "";
  fullName:string = this.firstName + this.lastName;
  
  constructor(private repo: RepositoryService) { }

  ngOnInit(): void {
    this.repo.getUser().subscribe(
      (response) => {this.userList = response}
    )    
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
