import { Component, signal } from '@angular/core';
import { Jogo } from './jogo/jogo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Jogo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('jogo-adivinha-angular');
}
