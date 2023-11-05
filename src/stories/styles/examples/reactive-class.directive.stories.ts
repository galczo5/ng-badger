import type {Meta, StoryObj} from "@storybook/angular";
import type { NgZone} from "@angular/core";
import {Component, ViewEncapsulation} from "@angular/core";
import {ExampleTextComponent} from "../../../app/example-text/example-text/example-text.component";
import {ReactiveClassDirective} from "../../../../projects/ng-badger/src/lib/directives";
import type { Observable} from "rxjs";
import {interval, map} from "rxjs";
import {GithubLinkComponent} from "../../../app/github-link/github-link.component";

@Component({
    selector: 'app-example',
    template: `
        <app-github-link src="/src/stories/styles/examples/reactive-class.directive.stories.ts"/>
        <app-example-text [reactiveClass]="classes$"/>
    `,
    imports: [
        ExampleTextComponent,
        ReactiveClassDirective,
        GithubLinkComponent
    ],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    styles: [`
        .red {
            display: block;
            background: red;
        }

        .blue {
            display: block;
            background: blue;
        }
    `]
})
export class ZonelessExampleComponent {
    classes$!: Observable<string>;

    constructor(ngZone: NgZone) {
        ngZone.runOutsideAngular(() => {
            this.classes$ = interval(1000)
                .pipe(map(i => i % 2 ? 'red' : 'blue'))
        });
    }
}

export default {
    title: 'Styles/Examples/ReactiveClassDirective',
    component: ZonelessExampleComponent
} as Meta<ZonelessExampleComponent>;


export const Example: StoryObj<ZonelessExampleComponent> = {};
