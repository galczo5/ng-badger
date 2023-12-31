import {Directive, Input} from '@angular/core';
import {Observable, of, switchMap} from "rxjs";
import {hostClasses, onChanges, ReactiveLifecycleDirective} from "../functions";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[reactiveClass]',
  standalone: true
})
export class ReactiveClassDirective extends ReactiveLifecycleDirective {

  @Input({required: true, alias: 'reactiveClass'})
  input: Observable<Array<string> | string> = of();

  private readonly classes = hostClasses();
  private readonly hostClassesSubscription = onChanges(this, 'input')
    .pipe(
      switchMap(() => this.input),
      takeUntilDestroyed()
    )
    .subscribe(classes => {
      const array = Array.isArray(classes) ? classes : [classes];
      this.classes.set(...array);
    });
}
