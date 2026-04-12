import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-logo-carousel',
  imports: [NgOptimizedImage],
  templateUrl: './logo-carousel.html',
  styleUrl: './logo-carousel.css',
})
export class LogoCarousel {
  logos = signal<string[]>([
    '/assets/logos/jew-friends.webp',
    '/assets/logos/reboot.webp',
    '/assets/logos/kraiwiesen.svg',
    '/assets/logos/tucheslau.avif',
    '/assets/logos/isabella.svg',
    '/assets/logos/oefs.webp',
    '/assets/logos/nicole.webp',
  ]);
}
