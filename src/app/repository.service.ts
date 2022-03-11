import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private apiUri:string = "https://localhost:7181/api/";

  
  

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${this.apiUri}user`)
  }

  getEvent(){
    return this.http.get(`${this.apiUri}event`);
  }

  getFavorite(){
    return this.http.get(`${this.apiUri}favorite`)
  }

  
  //should return the specified user by ID number
  getUserById(id: number){
    return this.http.get(`${this.apiUri}user/${id}`)
  }

  

}
