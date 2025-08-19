import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Imc } from './imc/imc';

@Component({
  selector: 'app-root',
  imports: [Imc],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Calculadora de IMC');
}
