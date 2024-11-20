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

  titulo: string = '';
  descricao: string = ''; 
  descricaoDetalhada: string = ''; 
  tituloDescricao: string = ' ';
  preco: string = '';
  imagem: string = '';

  hamburgueres = [
    {
      categoria: 'vegano',
      titulo: 'X-Alface-Premium',
      descricao: 'Um hambúrguer vegano suculento...',
      tituloDescricao: 'Descrição',
      descricaoDetalhada: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.', 
      preco: ' 25,90 R$',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'vegano',
      titulo: 'X-Tomate',
      descricao: 'Um hambúrguer vegano suculento...',
      tituloDescricao: 'Descrição',
      descricaoDetalhada: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida..', 
      preco: ' 25,90 R$',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'vegano',
      titulo: 'X-Frutas',
      descricao: 'Um hambúrguer vegano suculento...',
      tituloDescricao: 'Descrição',
      descricaoDetalhada: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.', 
      preco: ' 25,90 R$',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'fitness',
      titulo: 'Fitness Item 1',
      descricao: 'Um hambúrguer clássico com bacon crocante...',
      tituloDescricao: 'Descrição',
      descricaoDetalhada: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.', 
      preco: ' 25,90 R$',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'frango',
      titulo: 'Fitness Item 2',
      descricao: 'Delicioso hambúrguer de frango empanado...',
      tituloDescricao: 'Descrição',
      descricaoDetalhada: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.', 
      preco: ' 25,90 R$',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'frango',
      titulo: 'Fitness Item 3',
      descricao: 'Delicioso hambúrguer de frango empanado...',
      tituloDescricao: 'Descrição',
      descricaoDetalhada: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.', 
      preco: ' 25,90 R$',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'infarto',
      titulo: 'Infarto Item 1',
      descricao: 'Delicioso hambúrguer de frango empanado...',
      tituloDescricao: 'Descrição',
      descricaoDetalhada: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.', 
      preco: ' 25,90 R$',
      imagem: 'assets/card-burger.png'
    },
    {
      categoria: 'infarto',
      titulo: 'Infarto Item 2',
      descricao: 'Delicioso hambúrguer de frango empanado...',
      tituloDescricao: 'Descrição',
      descricaoDetalhada: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.', 
      preco: ' 25,90 R$',
      imagem: 'assets/card-burger.png'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const titulo = this.route.snapshot.paramMap.get('titulo');
    if (titulo) {
      const item = this.hamburgueres.find(h => h.titulo === titulo);
      if (item) {
        this.titulo = item.titulo;
        this.descricao = item.descricao;
        this.preco = item.preco;
        this.imagem = item.imagem;
        this.tituloDescricao = item.tituloDescricao; 
        this.descricaoDetalhada = item.descricaoDetalhada; 
      }
    }
  }
}
