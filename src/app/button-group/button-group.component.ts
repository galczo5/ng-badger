import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
    }
  `]
})
export class ButtonGroupComponent {

}
