import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



import { BoutiqueService } from './boutique.service';

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css',
})
export class BoutiqueComponent {
  listCategorie : any;
  listProduit : any;
  listProduitFilter : any;

  constructor(private categorieService : BoutiqueService, 
              private boutiqueService : BoutiqueService,
              private routeur : Router ){
  }

  ngOnInit(): void {
    this.getCategoriesFromService();
    this.getProduitsFromService();  
  }

  getCategoriesFromService() : void{
    this.categorieService.getCategories().subscribe(
      cat => {
        this.listCategorie = cat;
      }
    );
  }
  getProduitsFromService() : void{
    this.boutiqueService.getProduits().subscribe(
      prod => {
        this.listProduit = prod;
        this.listProduitFilter= prod;
      }
    ); 

  }

  detailsProduit(id : number){
    this.routeur.navigate(['details-produit', id]);
  }
  creer_compte(){
    this.routeur.navigate(['creer-compte']);
  }

  categoriebyid(id :number){
    this.listProduit = this.listProduitFilter.filter((product: { id_categorie: number; }) => product.id_categorie === id);
  }

}


