import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserInformationComponent } from './user-information/user-information.component';



@NgModule({
  declarations: [
    UserInformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserInformationComponent
  ]
})
export class UserModule { }
