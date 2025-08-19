import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './conversor.html',
  styleUrl: './conversor.css',
})
export class Conversor {
  valor: number = 0;
  moedaDestino: string = '';
  resultado: number | null = null;

  taxas: any = {
    Dólar: 5.1,
    Euro: 5.6,
    Libra: 6.5,
    Iene: 0.037,
    Bitcoin: 250000,
    Ethereum: 15000,
  };

  converter() {
    if (this.moedaDestino && this.valor > 0) {
      this.resultado = this.valor / this.taxas[this.moedaDestino];
    } else {
      this.resultado = null;
    }
  }
}
