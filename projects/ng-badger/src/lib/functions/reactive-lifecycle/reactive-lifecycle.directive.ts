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

@Directive({
  selector: '[reactiveLifecycle]',
  standalone: true
})
export class ReactiveLifecycleDirective implements OnChanges, OnInit, DoCheck,
  AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

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
