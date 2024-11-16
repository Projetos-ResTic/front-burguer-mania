import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-descricao',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.css'
})
export class DescricaoComponent {
  @Input() tituloDescricao: string = ''; 
  @Input() paragrafoDescricao: string = ''; 
}
