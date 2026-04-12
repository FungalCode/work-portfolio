import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TestimonialCard } from '../testimonial-card/testimonial-card';

interface TestimonialData {
  quote: string;
  name: string;
  title: string;
  image: string | null;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
  imports: [TestimonialCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  readonly testimonials = signal<TestimonialData[]>([
    {
      quote: '„[...] Er hat mich und meine Vorstellungen sofort verstanden und mir binnen kürzester Zeit eine traumhafte Webseite gebaut, die meine Erwartungen mehr als übertroffen hat und ist auch weiterhin bei Fragen oder Anpassungswünschen schnell zu Stelle.”',
      name: 'Jennifer Daniel',
      title: 'Physiotherapeutin',
      image: '/assets/images/testimonials/jennifer.webp'
    },
    {
      quote: '„Die Zusammenarbeit mit Samuel Lackner war von Anfang bis Ende angenehm und professionell. Meine Wünsche wurden perfekt umgesetzt, und das Ergebnis hat meine Erwartungen sogar übertroffen.”',
      name: 'Nicole Berger',
      title: 'Beraterin',
      image: '/assets/images/testimonials/nicole.webp'
    },
    {
      quote:'„Samuel hat meine Wünsche rasch und unkompliziert perfekt umgesetzt und sich zeitnah um meine Anfragen gekümmert. Kann ich nur empfehlen!”',
      name: 'Evelyn-Dechant Tucheslau',
      title:'Supervisorin',
      image: '/assets/images/testimonials/evelyn.webp'
    },
    {
      quote:'„Samuel hat unsere WordPress Homepage programmiert und diese mit viel Liebe und Umsicht gestaltet. Die Zusammenarbeit war einfach und er hat immer schnell reagiert oder für Probleme Lösungen gefunden.”',
      name: 'Esra W.',
      title: 'Goldschmied',
      image: '/assets/images/testimonials/anonymous.svg'
    }
  ]);
}
