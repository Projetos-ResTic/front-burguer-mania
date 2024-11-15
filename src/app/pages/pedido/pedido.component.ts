import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [HeaderComponent, InputComponent, ButtonComponent],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {
  @Input() titleText: string = 'Pedido';
  @Input() finalizarPedidoButtonText: string = 'Finalizar';
  isUpper: boolean = true;
}
