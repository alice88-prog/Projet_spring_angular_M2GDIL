import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailProduitService } from './detail-produit.service';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [],
  templateUrl: './detail-produit.component.html',
  styleUrl: './detail-produit.component.css'
})

export class DetailProduitComponent implements OnInit {
  public produit : any | undefined;
  
  constructor(
    private route : ActivatedRoute,
    private detail : DetailProduitService){
  }
  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.getProduitsById(id);

  }

  getProduitsById(id:number) : void{
    this.detail.getProduitsById(id).subscribe(
      cat => {
        this.produit = cat;
      }
    );
  }

  ajouterAchat(idProduit: number) {
    const achatData = {
      id_produit: idProduit
      // Ajoutez d'autres propriétés selon vos besoins (date_achat, etc.)
    };

    this.detail.addAchat(achatData).subscribe(
      response => {
        console.log('Achat ajouté avec succès', response);
        // Ajoutez ici la logique supplémentaire si nécessaire
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'achat', error);
        // Ajoutez ici la gestion des erreurs si nécessaire
      }
    );
  }

}
