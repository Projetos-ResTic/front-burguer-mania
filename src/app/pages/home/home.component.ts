import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CardapioComponent } from "../cardapio/cardapio.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, CardapioComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
     // Não precisa de lógica adicional, só definir os textos e rotas
     pedidoButtonText: string = 'Fazer pedido';
     cardapioButtonText: string = 'Acessar cardápio';


     pedidoRoute: string = '/pedido';  // Rota para a página de pedido
     cardapioRoute: string = '/cardapio'; // Rota para a página do cardápio
}
