import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';



export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página inicial
    { 
        path: 'cardapio', 
        component: CardapioComponent, // Página principal do cardápio
        children: [
          { path: ':categoria', component: CategoriaComponent }, // Página para itens de uma categoria
        ]
      },



      { path: 'pedido', component: PedidoComponent },
      { path: 'categoria/:titulo', component: CategoriaComponent }, // Rota de categoria com o parâmetro 'titulo'
      { path: 'detalhes/:id', component: DetalhesComponent },
];