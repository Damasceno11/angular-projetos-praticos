import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jogo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './jogo.html',
  styleUrl: './jogo.css',
})
export class Jogo {
  numeroSecreto: number = Math.floor(Math.random() * 100) + 1;
  palpite: number = 0;
  mensagem: string = '';
  acertou: boolean = false;

  verificar() {
    if (this.palpite === this.numeroSecreto) {
      this.mensagem = `🎉 Parabéns!!! Você acertou o número ${this.numeroSecreto}!`;
      this.acertou = true;
    } else {
      const diferenca = Math.abs(this.palpite - this.numeroSecreto);

      if (diferenca <= 5) {
        this.mensagem = '🔥 Quase!';
      } else if (diferenca <= 10) {
        this.mensagem = '😊 Perto!';
      } else if (diferenca <= 20) {
        this.mensagem = '😅 Longe!';
      } else {
        this.mensagem = '🥶 Muito Longe!';
      }
    }
  }

  reiniciar() {
    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
    this.palpite = 0;
    this.mensagem = '';
    this.acertou = false;
  }
}
