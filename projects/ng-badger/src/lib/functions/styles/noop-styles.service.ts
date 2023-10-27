/* eslint-disable @typescript-eslint/no-empty-function */
import {inject, Injectable} from '@angular/core';
import {Styles, StylesProperty} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class NoopStylesService implements Styles {
  add(): void {
  }

  contains(): boolean {
    return false;
  }

  get(): StylesProperty {
    return {};
  }

  remove(): void {
  }

  removeAll(): void {
  }

  set(): void {
  }

  swap(): StylesProperty {
    return {};
  }

  toggle(): void {
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function noopStyles(initWithStyles: Array<string>): Styles {
  return inject(NoopStylesService);
}
