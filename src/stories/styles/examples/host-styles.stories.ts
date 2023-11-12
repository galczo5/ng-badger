import type {Meta, StoryObj} from "@storybook/angular";
import {Component, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExampleTextComponent} from "../../../app/example-text/example-text/example-text.component";
import {hostStyles} from "projects/ng-badger/src/public-api";
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
    `]
})
export class ExampleComponent {
    hostStyles = hostStyles({});
}

@Component({
    selector: 'app-example-wrapper',
    standalone: true,
    imports: [ExampleComponent, ButtonGroupComponent, GithubLinkComponent],
    template: `
        <app-github-link src="/src/stories/styles/examples/host-styles.stories.ts"/>
        <app-example #example/>
        <app-button-group>
            <button (click)="example.hostStyles.set({ background: 'red' })">
                <code>hostStyles.set({{ "{" }} background: 'red' })</code>
            </button>
            <button (click)="example.hostStyles.add({color: 'blue'})">
                <code>hostStyles.add({{ "{" }} color: 'blue'})</code>
            </button>
            <button (click)="console.log(example.hostStyles.get())">
                <code>console.log(hostStyles.get())</code>
            </button>
            <button (click)="console.log(example.hostStyles.contains('background'))">
                <code>console.log(hostStyles.contains('background'))</code>
            </button>
            <button (click)="example.hostStyles.remove('background')">
                <code>hostStyles.remove('background')</code>
            </button>
            <button (click)="example.hostStyles.removeAll()">
                <code>hostStyles.removeAll()</code>
            </button>
            <button (click)="console.log(example.hostStyles.swap({ background: 'red' }))">
                <code>console.log(hostStyles.swap({{ "{" }} background: 'red' }))</code>
            </button>
            <button (click)="console.log(example.hostStyles.toString())">
                <code>console.log(hostStyles.toString())</code>
            </button>
        </app-button-group>
    `
})
export class ExampleWrapperComponent {
    console = console;
}

export default {
    title: 'Styles/Examples/hostStyles',
    component: ExampleWrapperComponent
} as Meta<ExampleComponent>;


export const Example: StoryObj<ExampleWrapperComponent> = {};
