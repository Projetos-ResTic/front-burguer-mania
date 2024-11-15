import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText: string = '';  // Texto do botão
  @Input() route: string = ''; // Rota para navegar ao clicar no botão

  @Input() isSpecial: boolean = false; // Botão especial, como o de "Cardápio"
  @Input()  isUpper: boolean = false;

  constructor(private router: Router) {}

  // Método de navegação para a rota fornecida
  navigateToRoute(): void {
    this.router.navigate([this.route]);  // Navega para a rota que foi passada
  }


  get buttonClasses() {
    return {
      'special-button': this.isSpecial,
      'default-button': !this.isSpecial,
      'upper-btn': this.isUpper
    };
  }
}
