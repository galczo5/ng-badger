import {inject, Injectable} from '@angular/core';
import {Styles, StylesProperty} from "./styles";

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

export function noopStyles(initWithStyles: Array<string>): Styles {
  return inject(NoopStylesService);
}
