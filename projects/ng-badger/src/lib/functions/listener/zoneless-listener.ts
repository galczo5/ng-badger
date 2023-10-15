import {DestroyRef, ElementRef, inject, NgZone} from "@angular/core";
import {fromEvent, Observable, Subject} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

export function zonelessListenerFactory<T>(eventName: string): (elementRef: ElementRef) => Observable<T> {
  const ngZone = inject(NgZone);
  const destroyRef = inject(DestroyRef);
  const result = new Subject<T>()

  return elementRef => {
    ngZone.runOutsideAngular(() => {
      fromEvent<T>(elementRef.nativeElement, eventName)
        .pipe(
          takeUntilDestroyed(destroyRef)
        )
        .subscribe(event => {
          result.next(event);
        });
    })

    return result;
  }
}

