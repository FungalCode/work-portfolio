import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-process',
  imports: [],
  templateUrl: './process.html',
  styleUrl: './process.css',
})
export class Process {
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
      description: 'Deine Webseite entsteht nicht im Baukasten, sie entsteht durch echte Programmierung. Dadurch ist sie bis ins Detail angepasst, barrierefrei und nachweislich schneller als Seiten anderer Agenturen.',
    },
    {
      title: '4. Optimierung',
      description: 'Deine Seite wächst mit dir und wird anhand gesammelter Daten kontinuierlich verbessert. Durch regelmäßige Updates bleibt sie sicher und schnell.',
    },
  ]);
}
