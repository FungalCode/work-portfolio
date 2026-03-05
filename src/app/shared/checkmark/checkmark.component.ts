import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkmark',
  imports: [],
  templateUrl: './checkmark.component.html',
  styleUrl: './checkmark.component.css'
})
export class CheckmarkComponent {
  @Input() size: number = 24;
  @Input() color: string = '#00C853';
  @Input() strokeWidth: number = 2;
  @Input() fillColor: string = 'rgba(255, 255, 255, 0)';
  @Input() outerStroke: string = '#00C853';

}
