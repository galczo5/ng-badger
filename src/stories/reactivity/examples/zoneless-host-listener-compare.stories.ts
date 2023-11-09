import type {Meta, StoryObj} from "@storybook/angular";
import {Component, DestroyRef, ElementRef, inject, NgZone, OnInit} from "@angular/core";
import {fromEvent, map, merge} from "rxjs";
import {GithubLinkComponent} from "../../../app/github-link/github-link.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {zonelessHostListener} from "ng-badger";

@Component({
    selector: 'app-default-example',
    standalone: true,
    template: `
        <div style="padding: 100px; border: 1px dashed black;">
            <p>
                <strong>fromEvent and runOutsideAngular</strong>
                Open dev tools.
                Move mouse above or click this box to trigger events
            </p>
        </div>
    `
})
export class DefaultExampleComponent implements OnInit {
    private readonly ngZone = inject(NgZone);
    private readonly destroyRef = inject(DestroyRef);
    private readonly elementRef = inject(ElementRef);

    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            merge(
                fromEvent(this.elementRef.nativeElement, 'mouseenter').pipe(map(() => 'Mouse Enter')),
                fromEvent(this.elementRef.nativeElement, 'mouseleave').pipe(map(() => 'Mouse Leave')),
                fromEvent(this.elementRef.nativeElement, 'click').pipe(map(() => 'Mouse Click'))
            )
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe(event =>
                    console.log(event)
                );
        });
    }
}

@Component({
    selector: 'app-badger-example',
    standalone: true,
    imports: [],
    template: `
        <div style="padding: 100px; border: 1px dashed black;">
            <p>
                <strong>zonelessHostListener</strong>
                Open dev tools.
                Move mouse above or click this box to trigger events
            </p>
        </div>
    `
})
export class BadgerExampleComponent {
    event$ = merge(
        zonelessHostListener('mouseenter').pipe(map(() => 'Mouse Enter')),
        zonelessHostListener('mouseleave').pipe(map(() => 'Mouse Leave')),
        zonelessHostListener('click').pipe(map(() => 'Mouse Click'))
    )
        .pipe(takeUntilDestroyed())
        .subscribe(event => console.log(event));
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
        <app-github-link src="/src/stories/reactivity/examples/zoneless-host-listener-compare.stories.ts"/>
        <app-badger-example/>
        <div style="margin-bottom: 25px;"></div>
        <app-default-example/>
    `
})
export class WrapperComponent {
}

export default {
    title: 'Reactivity/Examples/zonelessHostListener vs HostListener',
    component: WrapperComponent
} as Meta<WrapperComponent>;


export const Example: StoryObj<WrapperComponent> = {};
