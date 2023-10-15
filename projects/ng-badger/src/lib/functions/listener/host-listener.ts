import {Observable} from "rxjs";
import {listenerFactory} from "./listener";
import {ElementRef, inject} from "@angular/core";
import {zonelessListenerFactory} from "./zoneless-listener";

export function hostListener<T>(eventName: string): Observable<T> {
  const elementRef = inject(ElementRef);
  return listenerFactory<T>(eventName)(elementRef);
}

export function zonelessHostListener<T>(eventName: string): Observable<T> {
  const elementRef = inject(ElementRef);
  return zonelessListenerFactory<T>(eventName)(elementRef);
}
