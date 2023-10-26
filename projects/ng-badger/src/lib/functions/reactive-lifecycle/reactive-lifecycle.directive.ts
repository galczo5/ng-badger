/* eslint-disable @angular-eslint/use-lifecycle-interface,@angular-eslint/no-empty-lifecycle-method,@typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Directive,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {BadgerComponent} from "../../components/badger-component.directive";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[reactiveLifecycle]',
  standalone: true
})
export class ReactiveLifecycleDirective extends BadgerComponent implements OnChanges, OnInit, DoCheck,
  AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  constructor() {
    super();
  }

  /**
   * @deprecated
   */
  ngOnChanges(changes: SimpleChanges): void {
  }

  /**
   * @deprecated
   */
  ngOnInit(): void {
  }

  /**
   * @deprecated
   */
  ngDoCheck(): void {
  }

  /**
   * @deprecated
   */
  ngAfterViewInit(): void {
  }

  /**
   * @deprecated
   */
  ngAfterViewChecked(): void {
  }

  /**
   * @deprecated
   */
  ngAfterContentInit(): void {
  }

  /**
   * @deprecated
   */
  ngAfterContentChecked(): void {
  }

  /**
   * @deprecated
   */
  ngOnDestroy(): void {
  }
}
