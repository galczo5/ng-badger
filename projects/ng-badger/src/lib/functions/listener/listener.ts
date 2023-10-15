import {ElementRef} from "@angular/core";
import {fromEvent, Observable, of} from "rxjs";

export function listenerFactory<T>(eventName: string): (elementRef: ElementRef) => Observable<T> {
  return elementRef => fromEvent<T>(elementRef.nativeElement, eventName);
}

export function noopListener<T>(eventName: string): Observable<T> {
  return of<T>();
}
