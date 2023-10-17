import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [CommonModule],
  template: `
    <code>{{ method }}</code>
    <div style="width: 1px; background: #d1d5db;"></div>
    <div style="flex-grow: 1;">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      margin-bottom: 1rem;
      background: #f3f4f6;
      color: black;
      width: 100%;
    }
  `]
})
export class MethodComponent {

  @Input()
  method: string = '';

}
