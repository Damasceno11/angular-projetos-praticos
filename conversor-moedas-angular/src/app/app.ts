import { Component, signal } from '@angular/core';
import { Conversor } from './conversor/conversor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Conversor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('conversor-moedas-angular');
}
