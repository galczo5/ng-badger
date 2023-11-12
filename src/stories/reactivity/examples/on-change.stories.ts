import type {Meta, StoryObj} from "@storybook/angular";
import type { OnChanges, SimpleChanges} from "@angular/core";
import {Component, DestroyRef, inject, Injectable, Input} from "@angular/core";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import type {Observable} from "rxjs";
import { of, switchMap} from "rxjs";
import {onChanges, ReactiveLifecycleDirective} from "ng-badger";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {GithubLinkComponent} from "../../../app/github-link/github-link.component";

type User = {
    "firstName": string,
    "lastName": string,
    "email": string
}

@Injectable({providedIn: "root"})
export class HttpUsersDataService {

    private readonly data: Array<User> = [{
        "firstName": "Alic",
        "lastName": "Burchell",
        "email": "aburchell0@123-reg.co.uk"
    }, {
        "firstName": "Tilly",
        "lastName": "Neilands",
        "email": "tneilands1@yolasite.com"
    }, {
        "firstName": "Zollie",
        "lastName": "Holttom",
        "email": "zholttom2@weibo.com"
    }, {
        "firstName": "Nicki",
        "lastName": "Weathey",
        "email": "nweathey3@nih.gov"
    }, {
        "firstName": "Almeria",
        "lastName": "Silman",
        "email": "asilman4@technorati.com"
    }, {
        "firstName": "Deanne",
        "lastName": "Heister",
        "email": "dheister5@salon.com"
    }, {
        "firstName": "Dannel",
        "lastName": "Pisco",
        "email": "dpisco6@reverbnation.com"
    }, {
        "firstName": "Cory",
        "lastName": "Ferrillo",
        "email": "cferrillo7@live.com"
    }, {
        "firstName": "Booth",
        "lastName": "Atteridge",
        "email": "batteridge8@chicagotribune.com"
    }, {
        "firstName": "Kellia",
        "lastName": "Renyard",
        "email": "krenyard9@jimdo.com"
    }];

    getUserEmailAddresses(): Observable<Array<string>> {
        return of(this.data.map(d => d.email));
    }

    getUserByEmail(email?: string): Observable<User | undefined> {
        return of(this.data.find(u => u.email === email));
    }

}

@Component({
    selector: 'app-badger-user-details',
    template: `
        <div *ngIf="userDetails$ | async as userDetails">
            <strong>{{ userDetails.email }}</strong>
            <div>{{ userDetails.firstName }} {{ userDetails.lastName }}</div>
        </div>
    `,
    imports: [
        NgIf,
        AsyncPipe
    ],
    standalone: true
})
export class BadgerUserDetailsComponent extends ReactiveLifecycleDirective {

    @Input({required: true})
    selectedEmail?: string;

    userDetails$ = onChanges(this, 'selectedEmail')
        .pipe(
            switchMap(() => this.inject(HttpUsersDataService).getUserByEmail(this.selectedEmail))
        );
}

@Component({
    selector: 'app-default-user-details',
    template: `
        <div *ngIf="userDetails">
            <strong>{{ userDetails.email }}</strong>
            <div>{{ userDetails.firstName }} {{ userDetails.lastName }}</div>
        </div>
    `,
    imports: [
        NgIf,
        AsyncPipe
    ],
    standalone: true
})
export class DefaultUserDetailsComponent implements OnChanges {

    @Input({required: true})
    selectedEmail?: string;

    userDetails: User | undefined;

    private readonly httpUsersDataService = inject(HttpUsersDataService);
    private readonly destroyRef = inject(DestroyRef);

    ngOnChanges(changes: SimpleChanges) {
        if (changes['selectedEmail']) {
            this.httpUsersDataService.getUserByEmail(this.selectedEmail)
                .pipe(
                    takeUntilDestroyed(this.destroyRef)
                )
                .subscribe(userDetails => {
                    this.userDetails = userDetails;
                });
        }
    }
}

@Component({
    selector: 'app-example-wrapper',
    standalone: true,
    imports: [
        AsyncPipe,
        BadgerUserDetailsComponent,
        DefaultUserDetailsComponent,
        NgForOf,
        GithubLinkComponent,
    ],
    template: `
        <app-github-link src="/src/stories/reactivity/examples/on-change.stories.ts"/>
        <div style="display: grid; grid-template-columns: 1fr 1fr;">
            <ul>
                <li *ngFor="let email of userData$ | async">
                    <button (click)="selectedEmail = email">
                        {{ email }}
                    </button>
                </li>
            </ul>
            <div>
                <strong>Badger</strong>
                <app-badger-user-details [selectedEmail]="selectedEmail"/>

                <hr>
                <strong>Default</strong>
                <app-default-user-details [selectedEmail]="selectedEmail"/>
            </div>
        </div>
    `
})
export class ExampleComponent {
    userData$ = inject(HttpUsersDataService)
        .getUserEmailAddresses();

    selectedEmail = '';
}

export default {
    title: 'Reactivity/Examples/onChange real life example',
    component: ExampleComponent
} as Meta<ExampleComponent>;


export const Example: StoryObj<ExampleComponent> = {};
