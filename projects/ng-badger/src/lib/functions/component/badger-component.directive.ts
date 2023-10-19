import {ChangeDetectorRef, DestroyRef, Directive, ElementRef, inject, Injector, ProviderToken} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'badger-component',
  standalone: true
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class BadgerComponent {

  protected readonly injector: Injector;
  protected readonly changeDetectorRef: ChangeDetectorRef;
  protected readonly destroyRef: DestroyRef;
  protected readonly elementRef: ElementRef;

  constructor() {
    this.injector = inject(Injector);
    this.changeDetectorRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.elementRef = inject(ElementRef);
  }

  inject<T>(type: ProviderToken<T>): T {
    return this.injector.get(type);
  }

  injectOr<T, O>(type: ProviderToken<T>, or: O): T | O {
    return this.injector.get(type, or);
  }

}
