import { Component, signal } from '@angular/core';
import { Cerveja } from './cerveja/cerveja';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cerveja, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cerveja-angular');
}
