import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { FooterComponent } from './home/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
