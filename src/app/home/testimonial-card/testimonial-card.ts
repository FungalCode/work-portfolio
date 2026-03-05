import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  host: {
    'class': 'testimonial-card-host',
    'role': 'article',
    '[attr.aria-label]': '"Testimonial from " + authorName()'
  }
})
export class TestimonialCard {
  quote = input.required<string>();
  authorName = input.required<string>();
  authorTitle = input.required<string>();
  authorImage = input.required<string>();
}