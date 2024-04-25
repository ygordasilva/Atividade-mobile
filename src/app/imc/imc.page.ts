import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage {
  peso: number = 0;
  altura: number = 0;
  resultado: number = 0;

  constructor(private router: Router) {} 
  calcularIMC() {
    if (this.peso && this.altura) {
      this.resultado = this.peso / (this.altura * this.altura);
    }
  }

  interpretarIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Você está abaixo do peso :(';
    } else if (imc < 25) {
      return 'Seu peso está normal :)';
    } else if (imc < 30) {
      return 'Você está acima do peso :(';
    } else {
      return 'Você está obeso :(((';
    }
  }

  irParaHome() {
    this.router.navigate(['/home']);
  }
}
