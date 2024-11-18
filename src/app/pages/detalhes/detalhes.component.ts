import { Component, Input, OnInit } from '@angular/core';
import { DescricaoComponent } from "../../components/descricao/descricao.component";
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [DescricaoComponent, HeaderComponent, ButtonComponent, CardComponent],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})

export class DetalhesComponent implements OnInit {
  @Input() tituloPag : string = 'Detalhes';
  detalhesButtonText: string = 'Comprar';

  // Dados para exibir
  titulo: string = '';
  descricao: string = ''; // Descrição do card
  descricaoDetalhada: string = ''; 
  tituloDescricao: string = ' ';// Descrição detalhada
  preco: string = '';
  imagem: string = '';

  // Mock de dados com base nas categorias
  hamburgueres = [
    {
      categoria: 'vegano',
      titulo: 'X-Alface-Premium',
      descricao: 'Um hambúrguer vegano suculento...',
      tituloDescricao: 'titulo ',
      descricaoDetalhada: 'Este hambúrguer é feito com ingredientes frescos e 100% veganos, garantindo um sabor incrível para quem busca uma alimentação saudável.', // Descrição detalhada
      preco: ' 25,90 R$',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'vegano',
      titulo: 'X-Tomate',
      descricao: 'Um hambúrguer vegano suculento...',
      tituloDescricao: 'titulo ',
      descricaoDetalhada: 'Este hambúrguer é feito com ingredientes frescos e 100% veganos, garantindo um sabor incrível para quem busca uma alimentação saudável.', // Descrição detalhada
      preco: 'R$ 25,90',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'vegano',
      titulo: 'X-Frutas',
      descricao: 'Um hambúrguer vegano suculento...',
      tituloDescricao: 'titulo ',
      descricaoDetalhada: 'Este hambúrguer é feito com ingredientes frescos e 100% veganos, garantindo um sabor incrível para quem busca uma alimentação saudável.', // Descrição detalhada
      preco: 'R$ 25,90',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'fitness',
      titulo: 'Fitness Item 1',
      descricao: 'Um hambúrguer clássico com bacon crocante...',
      tituloDescricao: 'titulo ',
      descricaoDetalhada: 'Este hambúrguer é feito com ingredientes frescos e 100% veganos, garantindo um sabor incrível para quem busca uma alimentação saudável.', // Descrição detalhada
      preco: 'R$ 29,90',
      imagem: 'assets/card-bacon.png'
    },
    {
      categoria: 'frango',
      titulo: 'Fitness Item 2',
      descricao: 'Delicioso hambúrguer de frango empanado...',
      tituloDescricao: 'titulo ',
      descricaoDetalhada: 'Este hambúrguer é feito com ingredientes frescos e 100% veganos, garantindo um sabor incrível para quem busca uma alimentação saudável.', // Descrição detalhada
      preco: 'R$ 27,90',
      imagem: 'assets/card-chicken.png'
    },
    {
      categoria: 'frango',
      titulo: 'Fitness Item 3',
      descricao: 'Delicioso hambúrguer de frango empanado...',
      tituloDescricao: 'titulo ',
      descricaoDetalhada: 'Este hambúrguer é feito com ingredientes frescos e 100% veganos, garantindo um sabor incrível para quem busca uma alimentação saudável.', // Descrição detalhada
      preco: 'R$ 27,90',
      imagem: 'assets/card-chicken.png'
    },
    {
      categoria: 'infarto',
      titulo: 'Infarto Item 1',
      descricao: 'Delicioso hambúrguer de frango empanado...',
      tituloDescricao: 'titulo ',
      descricaoDetalhada: 'Este hambúrguer é feito com ingredientes frescos e 100% veganos, garantindo um sabor incrível para quem busca uma alimentação saudável.', // Descrição detalhada
      preco: 'R$ 27,90',
      imagem: 'assets/card-chicken.png'
    },
    {
      categoria: 'infarto',
      titulo: 'Infarto Item 2',
      descricao: 'Delicioso hambúrguer de frango empanado...',
      tituloDescricao: 'titulo ',
      descricaoDetalhada: 'Este hambúrguer é feito com ingredientes frescos e 100% veganos, garantindo um sabor incrível para quem busca uma alimentação saudável.', // Descrição detalhada
      preco: 'R$ 27,90',
      imagem: 'assets/card-chicken.png'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura o parâmetro 'titulo' da rota
    const titulo = this.route.snapshot.paramMap.get('titulo');
    if (titulo) {
      // Busca o item pelo título
      const item = this.hamburgueres.find(h => h.titulo === titulo);
      if (item) {
        this.titulo = item.titulo;
        this.descricao = item.descricao;
        this.preco = item.preco;
        this.imagem = item.imagem;
        this.tituloDescricao = item.tituloDescricao; // Atualizando título da descrição
        this.descricaoDetalhada = item.descricaoDetalhada; 
      }
    }
  }
}
