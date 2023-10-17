import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleTextComponent} from "../../../app/example-text/example-text/example-text.component";
import {hostClasses} from 'projects/ng-badger/src/public-api';

@Component({
  selector: 'app-host-classes-init',
  standalone: true,
  imports: [CommonModule, ExampleTextComponent],
  template: `
    <app-example-text/>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .initial {
      display: block;
      background: #60a5fa;
      color: white;
    }
  `]
})
export class HostClassesInitExampleComponent {
  private readonly hostClasses = hostClasses('initial');
}
