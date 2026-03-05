import { Component, ChangeDetectionStrategy, input, output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConversionEvents } from '../../shared/conversion-events/conversion-events';

type ButtonVariant = 'primary' | 'secondary';
type ActionType = 'external' | 'internal' | 'scroll';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class ButtonComponent {

  private conversionService = inject(ConversionEvents);
  variant = input<ButtonVariant>('primary');
  text = input('Erstgespräch buchen');
  externalLink = input<string | undefined>(undefined);
  internalLink = input<string | undefined>(undefined);
  scrollTarget = input<string | undefined>(undefined);
  clicked = output<void>();

  getActionType(): ActionType | undefined {
    if (this.externalLink()) return 'external';
    if (this.internalLink()) return 'internal';
    if (this.scrollTarget()) return 'scroll';
    return undefined;
  }

  handleClick(event: Event) {
    const actionType = this.getActionType();
    if (actionType === 'scroll') {
      event.preventDefault();
      const element = document.getElementById(this.scrollTarget()!);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (actionType === 'external') {
      this.conversionService.booking();
    }

    this.clicked.emit();
  }

}
