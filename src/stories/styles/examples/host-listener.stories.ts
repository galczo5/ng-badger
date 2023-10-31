import type {Meta, StoryObj} from "@storybook/angular";
import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {hostListener} from "projects/ng-badger/src/public-api";
import {map, merge} from "rxjs";

@Component({
  selector: 'app-example-wrapper',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template: `
      <div style="padding: 100px; border: 1px dashed black; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <p>
              Move mouse above this box to trigger events
          </p>
          <strong>{{ event$ | async }}</strong>
      </div>
  `
})
export class ExampleComponent {
  event$ = merge(
    hostListener('mouseenter').pipe(map(() => 'Mouse Enter')),
    hostListener('mouseleave').pipe(map(() => 'Mouse Leave')),
    hostListener('click').pipe(map(() => 'Mouse Click'))
  );
}

export default {
  title: 'Reactivity/Examples/hostListener',
  component: ExampleComponent
} as Meta<ExampleComponent>;


export const Example: StoryObj<ExampleComponent> = {};
