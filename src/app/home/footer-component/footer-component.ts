import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  // Use a signal for the current year to keep the copyright up to date
  protected currentYear = signal(new Date().getFullYear());
  
  protected contactInfo = {
    address: '5301 Eugendorf, Flurweg 6',
    email: 'contact@samuel-lackner.at',
    phone: '+43 677 61706002'
  };
}