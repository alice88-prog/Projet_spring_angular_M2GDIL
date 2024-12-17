import { Routes } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { CategorieComponent } from './categorie/categorie.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { CreerCompteComponent} from './creer-compte/creer-compte.component';

export const routes: Routes = [
    
    { path : '' , component : BoutiqueComponent},
    { path : 'categorie' , component : BoutiqueComponent},
    { path : 'categorie/:id' , component : CategorieComponent},
    { path : 'details-produit/:id', component : DetailProduitComponent },
    { path : 'creer-compte' , component :CreerCompteComponent}
];
