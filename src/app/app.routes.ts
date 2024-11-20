import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { DescricaoComponent } from './components/descricao/descricao.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  {
    path: 'cardapio',
    component: CardapioComponent, 
    children: [
      { path: ':categoria', component: CategoriaComponent }, 
    ],
  },

  { path: 'pedido', component: PedidoComponent },
  { path: 'categoria/:titulo', component: CategoriaComponent },

  { path: 'detalhes/:titulo', component: DetalhesComponent }, 

  //{ path: 'detalhes/:categoria', component: DetalhesComponent }
];
