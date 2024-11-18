import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { CardComponent } from "../../components/card/card.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [HeaderComponent, CardComponent, ButtonComponent, CommonModule, RouterLink],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria: string | null = null;
  cardapioCompletoButtonText: string = 'Ver cardápio completo';


  // Lista completa de itens, cada item tem imagem, título e descrição
  allItems = [
    {
      categoria: 'X-Vegan',
      itens: [
        { imagem: 'assets/card-burger.png', 
          titulo: 'X-Alface-Premium', 
          descricao: 'Pão, Habúrguer, alface, tomate, queijo e maionese' },

        { imagem: 'assets/card-burger.png',
          titulo: 'X-Tomate', 
          descricao: 'Pão, Habúrguer, alface, tomate, queijo e maionese' },

        { imagem: 'assets/card-burger.png',
          titulo: 'X-Frutas', 
          descricao: 'Pão, Habúrguer, alface, tomate, queijo e maionese' }

      ]
    },
    {
      categoria: 'X-Fitnnes',
      itens: [
        { imagem: 'assets/card-burger.png', titulo: 'Fitness Item 1', descricao: 'Descrição do Fitness Item 1' },
        { imagem: 'assets/card-burger.png', titulo: 'Fitness Item 2', descricao: 'Descrição do Fitness Item 2' },
        { imagem: 'assets/card-burger.png', titulo: 'Fitness Item 3', descricao: 'Descrição do Fitness Item 2' }
      ]
    },
    {
      categoria: 'X-Infarto',
      itens: [
        { imagem: 'assets/card-burger.png', titulo: 'Infarto Item 1', descricao: 'Descrição do Infarto Item 1' },
        { imagem: 'assets/card-burger.png', titulo: 'Infarto Item 2', descricao: 'Descrição do Infarto Item 2' },
        { imagem: 'assets/card-burger.png', titulo: 'Infarto Item 2', descricao: 'Descrição do Infarto Item 3' }
      ]
    }
  ];

  // Lista filtrada de itens da categoria
  items: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('titulo');
    console.log('Categoria recebida:', this.categoria);
  
    const categoriaData = this.allItems.find(item => item.categoria === this.categoria);
    this.items = categoriaData ? categoriaData.itens : [];
    console.log('Itens filtrados:', this.items);
  }


  

}
