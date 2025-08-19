import { Component, signal } from '@angular/core';
import { MediaComponent } from './media/media';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [MediaComponent],
})
export class App {
  protected readonly title = signal('media-aluno');
}
