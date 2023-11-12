import type {Meta, StoryObj} from "@storybook/angular";
import {Component, HostListener} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {hostListener} from "../../../../projects/ng-badger/src/public-api";
import {map, merge} from "rxjs";
import {GithubLinkComponent} from "../../../app/github-link/github-link.component";

@Component({
    selector: 'app-default-example',
    standalone: true,
    imports: [
        AsyncPipe,
        GithubLinkComponent
    ],
    template: `
        <div style="padding: 100px; border: 1px dashed black;">
            <p>
                <strong>@HostListener() example</strong>
                Move mouse above or click this box to trigger events
            </p>
            <strong>{{ event }}</strong>
        </div>
    `
})
export class DefaultExampleComponent {
    event?: string;

    @HostListener('click')
    onClick() {
        this.event = 'Mouse Click';
    }

    @HostListener('mouseenter')
    onEnter() {
        this.event = 'Mouse Enter';
    }

    @HostListener('mouseleave')
    onLeave() {
        this.event = 'Mouse Leave';
    }
}

@Component({
    selector: 'app-badger-example',
    standalone: true,
    imports: [
        AsyncPipe,
        GithubLinkComponent
    ],
    template: `
        <div style="padding: 100px; border: 1px dashed black;">
            <p>
                <strong>hostListener() example</strong>
                Move mouse above or click this box to trigger events
            </p>
            <strong>{{ event$ | async }}</strong>
        </div>
    `
})
export class BadgerExampleComponent {
    event$ = merge(
        hostListener('mouseenter').pipe(map(() => 'Mouse Enter')),
        hostListener('mouseleave').pipe(map(() => 'Mouse Leave')),
        hostListener('click').pipe(map(() => 'Mouse Click'))
    );
}

@Component({
    selector: 'app-wrapper',
    standalone: true,
    imports: [
        BadgerExampleComponent,
        DefaultExampleComponent,
        GithubLinkComponent
    ],
    template: `
        <app-github-link src="/src/stories/reactivity/examples/host-listener-compare.stories.ts"/>
        <app-badger-example/>
        <div style="margin-bottom: 25px;"></div>
        <app-default-example/>
    `
})
export class WrapperComponent {}

export default {
    title: 'Reactivity/Examples/hostListener vs HostListener',
    component: WrapperComponent
} as Meta<WrapperComponent>;


export const Example: StoryObj<WrapperComponent> = {};
