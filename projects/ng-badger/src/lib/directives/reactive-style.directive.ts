import {Directive, Input} from '@angular/core';
import {hostStyles, onChanges, ReactiveLifecycleDirective, StylesProperty} from "../functions";
import {Observable, of, switchMap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Directive({
  selector: '[reactiveStyle]',
  standalone: true
})
export class ReactiveStyleDirective extends ReactiveLifecycleDirective {

  @Input({required: true, alias: 'reactiveStyle'})
  input: Observable<StylesProperty> = of();

  private readonly styles = hostStyles({});
  private readonly stylesSubscription = onChanges(this, "input")
    .pipe(
      switchMap(() => this.input),
      takeUntilDestroyed()
    )
    .subscribe(styles => {
      this.styles.set(styles);
    });

}
