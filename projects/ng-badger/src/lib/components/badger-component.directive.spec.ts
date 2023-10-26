import {BadgerComponent} from './badger-component.directive';
import {TestBed} from "@angular/core/testing";
import {Component, Renderer2} from "@angular/core";

@Component({
  selector: 'app-test',
  template: '',
  standalone: true
})
export class TestComponent extends BadgerComponent {

  constructor() {
    super();
  }

  getInjector() {
    return this.injector;
  }

  getChangeDetectorRef() {
    return this.changeDetectorRef;
  }

  getDestroyRef() {
    return this.destroyRef;
  }

  getElementRef() {
    return this.elementRef;
  }

  getRenderer2() {
    return this.inject(Renderer2);
  }
}

describe('BadgerComponent', () => {

  let component!: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.createComponent(TestComponent).componentInstance;
  })

  it('should provide Injector', () => {
    expect(component.getInjector()).toBeTruthy();
  });

  it('should provide ChangeDetectorRef', () => {
    expect(component.getChangeDetectorRef()).toBeTruthy();
  });

  it('should provide DestroyRef', () => {
    expect(component.getDestroyRef()).toBeTruthy();
  });

  it('should provide ElementRef', () => {
    expect(component.getElementRef()).toBeTruthy();
  });

  describe('inject()', () => {
    it('should access DI even when component is created', () => {
      const renderer2 = component.getRenderer2();
      expect(renderer2).toBeTruthy();
    });
  });

});
