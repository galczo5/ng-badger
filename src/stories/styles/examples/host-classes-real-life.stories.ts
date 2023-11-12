import type {Meta, StoryObj} from "@storybook/angular";
import type { OnChanges, SimpleChanges} from "@angular/core";
import {Component, HostBinding, Input, ViewEncapsulation} from "@angular/core";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ExampleTextComponent} from "../../../app/example-text/example-text/example-text.component";
import {hostClasses} from "projects/ng-badger/src/public-api";
import {ButtonGroupComponent} from "../../../app/button-group/button-group.component";
import {GithubLinkComponent} from "../../../app/github-link/github-link.component";
import {onChanges, ReactiveLifecycleDirective} from "ng-badger";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {interval, map} from "rxjs";

@Component({
    selector: 'app-badger-example',
    standalone: true,
    imports: [CommonModule, ExampleTextComponent, ButtonGroupComponent],
    template: `
        <app-example-text/>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .bg-red {
            display: block;
            background: red;
        }

        .disabled {
            display: block;
            color: gray;
        }
    `]
})
export class BadgerExampleComponent extends ReactiveLifecycleDirective {

    @Input({required: true})
    active = false;

    @Input({required: true})
    disabled = false;

    hostClasses = hostClasses();

    changes$ = onChanges(this, 'active', 'disabled')
        .pipe(takeUntilDestroyed())
        .subscribe(() => {
            this.active ? this.hostClasses.add('bg-red') : this.hostClasses.remove('bg-red');
            this.disabled ? this.hostClasses.add('disabled') : this.hostClasses.remove('disabled');
        });
}

@Component({
    selector: 'app-default-example',
    standalone: true,
    imports: [CommonModule, ExampleTextComponent, ButtonGroupComponent],
    template: `
        <app-example-text/>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .bg-red {
            display: block;
            background: red;
        }

        .disabled {
            display: block;
            color: gray;
        }
    `]
})
export class DefaultExampleComponent implements OnChanges {

    @Input({required: true})
    active = false;

    @Input({required: true})
    disabled = false;

    @HostBinding('class.bg-red')
    bgRed = false;

    @HostBinding('class.disabled')
    cssDisabled = false;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['active']) {
            this.bgRed = this.active;
        }

        if (changes['disabled']) {
            this.cssDisabled = this.disabled;
        }
    }
}

@Component({
    selector: 'app-example-wrapper',
    standalone: true,
    imports: [BadgerExampleComponent, DefaultExampleComponent, ButtonGroupComponent, GithubLinkComponent, AsyncPipe],
    template: `
        <app-github-link src="/src/stories/styles/examples/host-classes.stories.ts"/>
        <app-badger-example [active]="!!(active$ | async)" [disabled]="!!(disabled$ | async)"/>
        <app-default-example [active]="!!(active$ | async)" [disabled]="!!(disabled$ | async)"/>
    `
})
export class ExampleWrapperComponent extends ReactiveLifecycleDirective {
    active$ = interval(1000)
        .pipe(map(i => i % 2));

    disabled$ = interval(3000)
        .pipe(map(i => i % 2));
}

export default {
    title: 'Styles/Examples/hostClasses with onChanges',
    component: ExampleWrapperComponent
} as Meta<BadgerExampleComponent>;


export const Example: StoryObj<ExampleWrapperComponent> = {};
