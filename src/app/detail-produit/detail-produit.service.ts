import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailProduitService {

  private url2 = "http://localhost/Devoir_angular/produits.php?id=";
  private url3 = "http://localhost/Devoir_angular/achat-produit.php";

  constructor(private http: HttpClient) { }

  getProduitsById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url2}${id}`);
  }

  // Méthode pour effectuer une requête POST vers la table "achat"
  addAchat(achatData: any): Observable<any> {
    return this.http.post<any>(this.url3, achatData);
  }
}
