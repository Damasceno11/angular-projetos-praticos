import { Component, signal } from '@angular/core';
import { Cadastro } from './cadastro/cadastro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cadastro],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cadastro-usuarios-angular');
}
