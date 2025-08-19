import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media',
  templateUrl: './media.html',
  styleUrls: ['./media.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class MediaComponent {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  mediaAluno: number | null = null;
  situacao: string = '';
  aprovadoCount: number = 0;
  reprovadoCount: number = 0;

  calcularMedia(): void {
    this.mediaAluno = (this.nota1 + this.nota2 + this.nota3) / 3;
    this.situacao = this.mediaAluno >= 6 ? 'aprovado' : 'reprovado';

    // Contadores
    if (this.situacao === 'aprovado') this.aprovadoCount++;
    else this.reprovadoCount++;
  }
}
