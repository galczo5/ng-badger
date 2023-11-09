import type {Meta, StoryObj} from "@storybook/angular";
import {Component, NgZone, ViewEncapsulation} from "@angular/core";
import {ExampleTextComponent} from "../../../app/example-text/example-text/example-text.component";
import {ReactiveStyleDirective} from "../../../../projects/ng-badger/src/lib/directives";
import type {Observable} from "rxjs";
import {interval, map} from "rxjs";
import type {StylesProperty} from "../../../../projects/ng-badger/src/lib/types";
import {GithubLinkComponent} from "../../../app/github-link/github-link.component";

@Component({
    selector: 'app-example',
    template: `
        <app-github-link src="/src/stories/styles/examples/reactive-style.directive.stories.ts"/>
        <app-example-text [reactiveStyle]="classes$"/>
    `,
    imports: [
        ExampleTextComponent,
        ReactiveStyleDirective,
        GithubLinkComponent
    ],
    encapsulation: ViewEncapsulation.None,
    standalone: true
})
export class ZonelessExampleComponent {
    classes$!: Observable<StylesProperty>;

    constructor(ngZone: NgZone) {
        ngZone.runOutsideAngular(() => {
            this.classes$ = interval(1000)
                .pipe(
                    map(i => i % 2 ? {color: 'red'} : {color: 'blue'})
                )
        });
    }
}

export default {
    title: 'Styles/Examples/ReactiveStyleDirective',
    component: ZonelessExampleComponent
} as Meta<ZonelessExampleComponent>;


export const Example: StoryObj<ZonelessExampleComponent> = {};
