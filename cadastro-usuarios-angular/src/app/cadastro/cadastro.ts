import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Pessoa = {
  id?: number;
  nome: string;
  idade: number;
};

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro implements OnInit {
  private readonly API_URL = 'http://localhost:3000/pessoas';

  // Form
  nome: string = '';
  idade: number | null = null;

  // Lista
  pessoas: Pessoa[] = [];

  // Feedback
  msg: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.http.get<Pessoa[]>(this.API_URL).subscribe({
      next: (lista) => (this.pessoas = lista),
      error: () => (this.msg = 'Erro ao carregar dados da API. Verifique se a API está rodando.'),
    });
  }

  adicionar(): void {
    const nomeTrim = this.nome.trim();

    if (!nomeTrim || this.idade == null || this.idade < 0 || this.idade > 120) {
      this.msg = 'Preencha um nome válido e uma idade de 1 a 120.';
      return;
    }

    const nova: Pessoa = { nome: nomeTrim, idade: this.idade };

    this.http.post<Pessoa>(this.API_URL, nova).subscribe({
      next: (p) => {
        this.pessoas.push(p);
        this.nome = '';
        this.idade = null;
        this.msg = 'Cadastro com sucesso!';
      },
      error: () => (this.msg = 'Erro ao cadastrar. Confira a API.'),
    });
  }

  remover(id?: number): void {
    if (id == null) return;

    this.http.delete(`${this.API_URL}/${id}`).subscribe({
      next: () => {
        this.pessoas = this.pessoas.filter((p) => p.id !== id);
        this.msg = 'Registro removido.';
      },
      error: () => (this.msg = 'Erro ao remover. Confira a API.'),
    });
  }

  // Contadores (calculados com base na lista da API)
  get maioresDeIdade(): number {
    return this.pessoas.filter((p) => p.idade >= 18).length;
  }

  get menoresDeIdade(): number {
    return this.pessoas.filter((p) => p.idade < 18).length;
  }

  // Desabilitar o botão se form inválido
  get podeCadastrar(): boolean {
    return !!this.nome.trim() && this.idade !== null && this.idade >= 0 && this.idade <= 120;
  }
}
