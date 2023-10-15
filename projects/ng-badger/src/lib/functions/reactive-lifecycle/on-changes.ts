import {ReactiveLifecycleDirective} from "./reactive-lifecycle.directive";
import {Observable, Subject} from "rxjs";
import {SimpleChanges} from "@angular/core";

export type InputType<T> = keyof T;

export function onChanges<T extends ReactiveLifecycleDirective>(
  component: T,
  ...inputs: Array<InputType<T>>
): Observable<SimpleChanges> {

  const result = new Subject<SimpleChanges>();
  const original = component.ngOnChanges;

  component.ngOnChanges = (simpleChanges: SimpleChanges) => {
    const anyInputChanged = [...inputs]
      .map(i => simpleChanges[i as unknown as any])
      .some(Boolean);

    if (anyInputChanged) {
      result.next(simpleChanges);
    }

    original(simpleChanges);
  };

  return result;

}
