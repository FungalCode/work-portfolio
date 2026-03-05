import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PricingCard } from '../pricing-card/pricing-card';
import { ButtonComponent } from "../../shared/button/button";

interface PricingPlan {
  title: string;
  price: string;
  highlighted: string[];
  standard: string[];
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
  imports: [PricingCard, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pricing {
  readonly plans = signal<PricingPlan[]>([
    {
      title: 'Strategische <br> Praxis-Webseite',
      price: '5.500€',
      highlighted: [
        '30 Tage Geld-Zurück Garantie',
        '12 Monate Wartung',
        'Individuelle Visitenkarten',
        '2 Optimierungszyklen'
      ],
      standard: [
        'Bis zu 5 Unterseiten',
        'Individuelles Design',
        'Selbst anpassbar',
        'Google Optimierung (SEO)',
        'Höchstgeschwindigkeit',
        'Barrierefrei'
      ]
    },
    {
      title: 'Wartung <br> Praxis-Webseite',
      price: '1.200€ p.a.',
      highlighted: [
        'Leistungsbericht',
        '30 Designminuten',
        '2 Inhaltsänderungen'
      ],
      standard: [
        'Individuelle Domain',
        'Passende Email',
        'Regelmäßige Updates & Backups'
      ]
    }
  ]);
}