import { Component, Input } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";  
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommonModule, HeaderComponent, RouterLink],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

export class CardapioComponent {
  cardapioCompletoButtonText: string = 'Ver cardápio completo';
  isUpper: boolean = true;

  @Input() titleText: string = 'Cardápio';

  cards = [
    {
      imagem: 'assets/card-burger.png',
      titulo: 'X-Vegan',
      descricao: 'Pão, Habúrguer, alface, tomate, queijo e maionese'
    },
    {
      imagem: 'assets/card-burger.png',
      titulo: 'X-Fitnnes',
      descricao: 'Pão, Habúrguer, alface, tomate, queijo e maionese'
    },
    {
      imagem: 'assets/card-burger.png',
      titulo: 'X-Infarto',
      descricao: 'Pão, Habúrguer, alface, tomate, queijo e maionese'
    }
  ];

  
}
