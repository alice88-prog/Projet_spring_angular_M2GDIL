import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';

import { CategorieService } from './categorie.service';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent {

  listProduitById : any;

  constructor(private categorieByIdService : CategorieService){
  }

  ngOnInit(): void {
  }

}


