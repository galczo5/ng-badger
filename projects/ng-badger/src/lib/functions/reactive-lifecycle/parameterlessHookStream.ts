import {Observable, Subject} from "rxjs";
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnDestroy,
  OnInit
} from "@angular/core";

export type ParameterlessHooks =
  OnInit & DoCheck & AfterViewInit & AfterViewChecked & AfterContentInit & AfterContentChecked & OnDestroy;

export function parameterlessHookStream<T extends ParameterlessHooks>(
  component: T,
  method: keyof ParameterlessHooks
): Observable<void> {
  const original = component[method];
  const result = new Subject<void>();

  component[method] = () => {
    result.next(void 0);
    original.bind(component)();
  }

  return result;
}
