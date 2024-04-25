import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  irParaIMC() {
    // Navega para a página com o nome do arquivo "imc"
    this.router.navigate(['/imc']);
  }

}
