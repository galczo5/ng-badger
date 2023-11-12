import type {Meta, StoryObj} from "@storybook/angular";
import {Component, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExampleTextComponent} from "../../../app/example-text/example-text/example-text.component";
import {hostClasses} from "projects/ng-badger/src/public-api";
import {ButtonGroupComponent} from "../../../app/button-group/button-group.component";
import {GithubLinkComponent} from "../../../app/github-link/github-link.component";

@Component({
    selector: 'app-example',
    standalone: true,
    imports: [CommonModule, ExampleTextComponent, ButtonGroupComponent],
    template: `
        <app-example-text/>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        app-example {
            display: block;
        }

        .bg-red {
            background: red;
        }

        .text-blue {
            color: blue;
        }
    `]
})
export class ExampleComponent {
    hostClasses = hostClasses();
}

@Component({
    selector: 'app-example-wrapper',
    standalone: true,
    imports: [ExampleComponent, ButtonGroupComponent, GithubLinkComponent],
    template: `
        <app-github-link src="/src/stories/styles/examples/host-classes.stories.ts"/>
        <app-example #example/>
        <app-button-group>
            <button (click)="example.hostClasses.set('bg-red')">
                <code>hostClasses.set('bg-red')</code>
            </button>
            <button (click)="example.hostClasses.add('text-blue')">
                <code>hostClasses.add('text-blue')</code>
            </button>
            <button (click)="console.log(example.hostClasses.get())">
                <code>console.log(hostClasses.get())</code>
            </button>
            <button (click)="console.log(example.hostClasses.contains('bg-red'))">
                <code>console.log(hostClasses.contains('bg-red'))</code>
            </button>
            <button (click)="example.hostClasses.remove('bg-red')">
                <code>hostClasses.remove('bg-red')</code>
            </button>
            <button (click)="example.hostClasses.removeAll()">
                <code>hostClasses.removeAll()</code>
            </button>
            <button (click)="console.log(example.hostClasses.swap('bg-red'))">
                <code>console.log(hostClasses.swap('bg-red'))</code>
            </button>
            <button (click)="example.hostClasses.toggle('bg-red')">
                <code>hostClasses.toggle('bg-red')</code>
            </button>
            <button (click)="console.log(example.hostClasses.toString())">
                <code>console.log(hostClasses.toString())</code>
            </button>
        </app-button-group>
    `
})
export class ExampleWrapperComponent {
    console = console;
}

export default {
    title: 'Styles/Examples/hostClasses',
    component: ExampleWrapperComponent
} as Meta<ExampleComponent>;


export const Example: StoryObj<ExampleWrapperComponent> = {};
