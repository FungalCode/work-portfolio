import { Component, signal, ElementRef, viewChild, afterNextRender, inject, PLATFORM_ID } from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from "../../shared/button/button";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './about-me-component.html',
  styleUrl: './about-me-component.css'
})
export class AboutMeComponent {
  private platformId = inject(PLATFORM_ID);
  
  protected paragraphs = signal<string[]>([
  ` Ich heiße Samuel Lackner und komme aus Salzburg. Von dort aus arbeite ich mit Physiotherapeuten und Gesundheitspraxen in Österreich. 
    <br><br>
    Ich habe mich bewusst auf diesen Bereich spezialisiert, weil Vertrauen und Klarheit hier entscheidend sind. 
    Eine Praxis-Webseite muss diese Werte vermitteln und Orientierung geben, anstatt nur gut auszusehen.
    <br><br>
    Durch meinen Hintergrund in der Informatik verbinde ich klare Strategie mit technisch sauberer und nachhaltiger Umsetzung.`
]);

  // Image Stack State
  protected images = signal(['/assets/images/samuel/samuel-1.webp', '/assets/images/samuel/samuel-2.webp', '/assets/images/samuel/samuel-3.webp', '/assets/images/samuel/samuel-4.webp']);
  protected isPlaying = signal(true);
  private shuffleInterval: any;

  // Intersection Observer
  private sectionRef = viewChild<ElementRef>('aboutSection');

  constructor() {
    afterNextRender(() => {
      this.initIntersectionObserver();
    });
  }

  private initIntersectionObserver() {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.startShuffling();
      } else {
        this.stopShuffling();
      }
    }, { threshold: 0.2 });

    if (this.sectionRef()) {
      observer.observe(this.sectionRef()!.nativeElement);
    }
  }

  protected togglePlay() {
    this.isPlaying.update(v => !v);
    this.isPlaying() ? this.startShuffling() : this.stopShuffling();
  }

  private startShuffling() {
    if (this.shuffleInterval || !this.isPlaying()) return;
    this.shuffleInterval = setInterval(() => this.shuffleCards(), 5000);
  }

  private shuffleCards() {
    this.images.update(prev => {
    const newStack = [...prev];
    const topCard = newStack.pop();
    if (topCard) newStack.unshift(topCard);
    return newStack;
    });
  }

  protected manualShuffle() {
    this.shuffleCards();
    
    if (this.isPlaying()) {
      this.stopShuffling();
      this.startShuffling();
    }
  }

  private stopShuffling() {
    clearInterval(this.shuffleInterval);
    this.shuffleInterval = null;
  }
}