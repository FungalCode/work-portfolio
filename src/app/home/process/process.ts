import {AfterViewInit, Component, ElementRef, inject, signal} from '@angular/core';
import {SvgComponent} from '../../shared/svg-component/svg-component';

@Component({
  selector: 'app-process',
  imports: [
    SvgComponent
  ],
  templateUrl: './process.html',
  styleUrl: './process.css',
})
export class Process implements AfterViewInit {
  private el = inject(ElementRef);

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.5 });

    const header = this.el.nativeElement.querySelector('.step:nth-of-type(2) h3');
    const paper = this.el.nativeElement.querySelector('.paper');
    const bolt = this.el.nativeElement.querySelector('.bolt');
    if (header) observer.observe(header);
    if (paper) observer.observe(paper);
    if (bolt) observer.observe(bolt);
  }
  readonly steps = signal<
  {
    title: string,
    description: string
  }[]>([
    {
      title: '1. Klare Strategie',
      description: 'Gemeinsam werfen wir einen genauen Blick auf Deine Positionierung, Ziel-gruppe und den Wettbewerb. Außerdem definieren wir Inhalte, Struktur und Google-Strategie.',
    },
    {
      title: '2. Individuelles Design',
      description: 'Mein Fokus liegt nicht auf Effekten und Animationen, sondern auf Klarheit und Wirkung. Das Ergebnis sind Sicht-barkeit auf Google, Vertrauen und Buchungen.',
    },
    {
      title: '3. Umsetzung',
      description: 'Deine Webseite entsteht nicht im Baukasten, sie entsteht durch <strong>echte Programmierung.</strong> Dadurch ist sie bis ins Detail angepasst, barrierefrei und nachweislich schneller als Seiten anderer Agenturen.',
    },
    {
      title: '4. Optimierung',
      description: 'Deine Seite wächst mit dir und wird anhand gesammelter Daten kontinuierlich verbessert. Durch regelmäßige Updates bleibt sie sicher und schnell.',
    },
  ]);
}
