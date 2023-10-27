/* eslint-disable @typescript-eslint/no-empty-function */
import {inject, Injectable} from '@angular/core';
import {CssClasses} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class NoopCssClassesService implements CssClasses {
  add(): void {
  }

  contains(): boolean {
    return false;
  }

  get(): Array<string> {
    return [];
  }

  remove(): void {
  }

  removeAll(): void {
  }

  set(): void {
  }

  swap(): Array<string> {
    return [];
  }

  toggle(): void {
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function noopCssClasses(...initWithCssClass: Array<string>): CssClasses {
  return inject(NoopCssClassesService);
}

