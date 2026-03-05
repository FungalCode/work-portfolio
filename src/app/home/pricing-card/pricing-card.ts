import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CheckmarkComponent } from '../../shared/checkmark/checkmark.component';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CheckmarkComponent],
  host: {
    'class': 'pricing-card-host',
    'role': 'article',
    '[attr.aria-label]': '"Preis für " + title()'
  }
})
export class PricingCard {
  title = input.required<string>();
  price = input.required<string>();
  highlightedFeatures = input<string[]>([]);
  standardFeatures = input<string[]>([]);
}