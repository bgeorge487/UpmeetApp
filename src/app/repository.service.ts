import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private apiUri:string = "https://localhost:44359/api/"; 

  
  
  constructor(private http: HttpClient) { }

  

  getFavorite(){
    return this.http.get(`${this.apiUri}favorite`)
  }

  getUsers(){
    return this.http.get(`${this.apiUri}user`)
  }
  getEvents(){
    return this.http.get(`${this.apiUri}event`)
  }

  
  //should return the specified user by ID number
  getUserById(id: number){
    return this.http.get(`${this.apiUri}user/${id}`)
  }

  pushUserToDatabase() {
    
  }

}
