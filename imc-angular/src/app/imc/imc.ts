import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  imports: [CommonModule, FormsModule],
  templateUrl: './imc.html',
  styleUrl: './imc.css',
  standalone: true,
})
export class Imc {
  peso: number = 0;
  altura: number = 0;
  imc: number | null = null;
  situacao: string = '';

  calcularImc(): void {
    if (this.altura > 0 && this.peso > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      if (this.imc < 18.5) this.situacao = 'Abaixo do peso';
      else if (this.imc < 25) this.situacao = 'Peso normal';
      else if (this.imc < 30) this.situacao = 'Sobrepeso';
      else if (this.imc < 35) this.situacao = 'Obesidade grau 1';
      else if (this.imc < 35) this.situacao = 'Obesidade grau 1';
      else this.situacao = 'Obesidade grau 3';
    }
  }

  // Função cor do texto de acordo com a situação
  corSituacao(): string {
    if (!this.imc) return '';
    return this.imc < 18.5
      ? 'blue'
      : this.imc < 25
      ? 'green'
      : this.imc < 30
      ? 'orange'
      : this.imc < 35
      ? '#FF4500'
      : this.imc < 40
      ? '#FF0000'
      : '#8B0000';
  }
}
