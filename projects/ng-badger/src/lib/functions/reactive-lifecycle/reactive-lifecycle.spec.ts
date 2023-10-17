import {Component, Input, SimpleChanges} from "@angular/core";
import {ReactiveLifecycleDirective} from "./reactive-lifecycle.directive";
import {onChanges} from "./on-changes";
import {onInit} from "./on-init";
import {doCheck} from "./do-check";
import {afterViewInit} from "./after-view-init";
import {afterViewChecked} from "./after-view-checked";
import {afterContentInit} from "./after-content-init";
import {afterContentChecked} from "./after-content-checked";
import {onDestroy} from "./on-destroy";
import {take} from "rxjs";

@Component({
  selector: 'test',
  template: '',
  standalone: true
})
export class TestComponent extends ReactiveLifecycleDirective {

  @Input()
  input!: string;

  onChanges$ = onChanges(this, 'input');
  onInit$ = onInit(this);
  doCheck$ = doCheck(this);
  afterViewInit$ = afterViewInit(this);
  afterViewChecked$ = afterViewChecked(this);
  afterContentInit$ = afterContentInit(this);
  afterContentChecked$ = afterContentChecked(this);
  onDestroy$ = onDestroy(this);

  hooks: Array<string> = [];

  constructor() {
    super();
  }

  override ngOnChanges(changes: SimpleChanges) {
    this.hooks.push('ngOnChanges');
  }

  override ngOnInit() {
    this.hooks.push('ngOnInit');
  }

  override ngDoCheck() {
    this.hooks.push('ngDoCheck');
  }

  override ngAfterViewInit() {
    this.hooks.push('ngAfterViewInit');
  }

  override ngAfterViewChecked() {
    this.hooks.push('ngAfterViewChecked');
  }

  override ngAfterContentInit() {
    this.hooks.push('ngAfterContentInit');
  }

  override ngAfterContentChecked() {
    this.hooks.push('ngAfterContentChecked');
  }

  override ngOnDestroy() {
    this.hooks.push('ngOnDestroy');
  }
}

describe('reactive lifecycle', () => {

  describe('onChanges()', () => {
    it('should create a stream from lifecycle hook', done => {
      const component = new TestComponent();
      component.onChanges$
        .pipe(take(1))
        .subscribe(changes => {
          expect(changes['input']).toBeTruthy();
          done();
        });

      component.ngOnChanges({
        input: {
          firstChange: true,
          currentValue: 'snake',
          previousValue: undefined,
          isFirstChange(): boolean {
            return true;
          }
        }
      });
    });

    it('original hook works', () => {
      const component = new TestComponent();
      component.ngOnChanges({});
      expect(component.hooks.includes('ngOnChanges')).toBeTrue();
    });
  });

  describe('onInit()', () => {
    it('should create a stream from lifecycle hook', done => {
      const component = new TestComponent();
      component.onInit$
        .pipe(take(1))
        .subscribe(() => {
          expect(true).toBeTruthy();
          done();
        });

      component.ngOnInit();
    });

    it('original hook works', () => {
      const component = new TestComponent();
      component.ngOnInit();
      expect(component.hooks.includes('ngOnInit')).toBeTrue();
    });
  });

  describe('doCheck()', () => {
    it('should create a stream from lifecycle hook', done => {
      const component = new TestComponent();
      component.doCheck$
        .pipe(take(1))
        .subscribe(() => {
          expect(true).toBeTruthy();
          done();
        });

      component.ngDoCheck();
    });

    it('original hook works', () => {
      const component = new TestComponent();
      component.ngDoCheck();
      expect(component.hooks.includes('ngDoCheck')).toBeTrue();
    });
  });

  describe('afterViewInit()', () => {
    it('should create a stream from lifecycle hook', done => {
      const component = new TestComponent();
      component.afterViewInit$
        .pipe(take(1))
        .subscribe(() => {
          expect(true).toBeTruthy();
          done();
        });

      component.ngAfterViewInit();
    });

    it('original hook works', () => {
      const component = new TestComponent();
      component.ngAfterViewInit();
      expect(component.hooks.includes('ngAfterViewInit')).toBeTrue();
    });
  });

  describe('afterViewChecked()', () => {
    it('should create a stream from lifecycle hook', done => {
      const component = new TestComponent();
      component.afterViewChecked$
        .pipe(take(1))
        .subscribe(() => {
          expect(true).toBeTruthy();
          done();
        });

      component.ngAfterViewChecked();
    });

    it('original hook works', () => {
      const component = new TestComponent();
      component.ngAfterViewChecked();
      expect(component.hooks.includes('ngAfterViewChecked')).toBeTrue();
    });
  });

  describe('afterContentInit()', () => {
    it('should create a stream from lifecycle hook', done => {
      const component = new TestComponent();
      component.afterContentInit$
        .pipe(take(1))
        .subscribe(() => {
          expect(true).toBeTruthy();
          done();
        });

      component.ngAfterContentInit();
    });

    it('original hook works', () => {
      const component = new TestComponent();
      component.ngAfterContentInit();
      expect(component.hooks.includes('ngAfterContentInit')).toBeTrue();
    });
  });

  describe('afterContentChecked()', () => {
    it('should create a stream from lifecycle hook', done => {
      const component = new TestComponent();
      component.afterContentChecked$
        .pipe(take(1))
        .subscribe(() => {
          expect(true).toBeTruthy();
          done();
        });

      component.ngAfterContentChecked();
    });

    it('original hook works', () => {
      const component = new TestComponent();
      component.ngAfterContentChecked();
      expect(component.hooks.includes('ngAfterContentChecked')).toBeTrue();
    });
  });

  describe('onDestroy()', () => {
    it('should create a stream from lifecycle hook', done => {
      const component = new TestComponent();
      component.onDestroy$
        .pipe(take(1))
        .subscribe(() => {
          expect(true).toBeTruthy();
          done();
        });

      component.ngOnDestroy();
    });

    it('original hook works', () => {
      const component = new TestComponent();
      component.ngOnDestroy();
      expect(component.hooks.includes('ngOnDestroy')).toBeTrue();
    });
  });


})
