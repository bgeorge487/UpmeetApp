import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private apiUserUri:string = "NYI";
  private apiEventUri:string = "NYI";

  constructor(private http: HttpClient) { }



}
