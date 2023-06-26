import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonPremierServiceService {

  constructor(private http:HttpClient) { }
  private readonly myApiUrl = "http://localhost:8081/api";

  getAllArticles(){
    return this.http.get(`${this.myApiUrl}/articles`);
  }
  someDeuxPlusTrois(): number{
    return 2 + 10;
  }
}
