import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private url ="http://localhost/Devoir_angular/api_categories.php";
  private url1="http://localhost/Devoir_angular/produits.php";
  public id : number=0;


  constructor(private http:HttpClient) { }

  getCategories() : Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  getProduits() : Observable<any[]>{
    return this.http.get<any[]>(this.url1);
  }
}
