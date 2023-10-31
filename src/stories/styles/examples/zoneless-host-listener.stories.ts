import type {Meta, StoryObj} from "@storybook/angular";
import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {zonelessHostListener} from "projects/ng-badger/src/public-api";
import {map, merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {GithubLinkComponent} from "../../../app/github-link/github-link.component";

@Component({
  selector: 'app-example-wrapper',
  standalone: true,
  imports: [
    AsyncPipe,
    GithubLinkComponent
  ],
  template: `
    <app-github-link src="/src/stories/styles/examples/zoneless-host-listener.stories.ts"/>
    <div
      style="padding: 100px; border: 1px dashed black; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <p>
        Open dev console and move mouse above this box to trigger events
      </p>
    </div>
  `
})
export class ExampleComponent {
  event$ = merge(
    zonelessHostListener('mouseenter').pipe(map(() => 'Mouse Enter')),
    zonelessHostListener('mouseleave').pipe(map(() => 'Mouse Leave')),
    zonelessHostListener('click').pipe(map(() => 'Mouse Click'))
  )
    .pipe(takeUntilDestroyed())
    .subscribe(str => console.log(str));
}

export default {
  title: 'Reactivity/Examples/zonelessHostListener',
  component: ExampleComponent
} as Meta<ExampleComponent>;


export const Example: StoryObj<ExampleComponent> = {};
