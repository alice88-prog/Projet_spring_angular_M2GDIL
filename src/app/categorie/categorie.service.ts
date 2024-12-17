import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url2="http://localhost/Devoir_angular/produits.php?id=";


  constructor(private http:HttpClient) { }

  getProduitsById(id : number) : Observable<any[]>{
    return this.http.get<any[]>(`${this.url2}${id}`);
  }

}