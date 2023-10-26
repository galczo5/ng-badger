import { ReactiveStyleDirective } from './reactive-style.directive';
import {Component} from "@angular/core";
import {Subject} from "rxjs";
import {StylesProperty} from "../functions";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

@Component({
  selector: 'app-test',
  template: '<div id="test" [reactiveStyle]="stream$"></div>',
  standalone: true,
  imports: [
    ReactiveStyleDirective
  ]
})
export class TestComponent {
  stream$ = new Subject<StylesProperty>();
}

describe('ReactiveStyleDirective', () => {

  let component!: ComponentFixture<TestComponent>
  let nativeElement!: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.createComponent(TestComponent);
    component.changeDetectorRef.detectChanges();
    nativeElement = component.debugElement.query(By.css('#test')).nativeElement as HTMLElement;
  });

  it('should add style when stream emits a value', () => {
    component.componentInstance.stream$.next({
      background: 'red',
      color: 'white'
    });

    expect(nativeElement.style.background).toEqual('red');
    expect(nativeElement.style.color).toEqual('white');
  });

  it('should reset style when stream emits multiple values', () => {
    component.componentInstance.stream$.next({
      background: 'red',
      color: 'white'
    });

    expect(nativeElement.style.background).toEqual('red');
    expect(nativeElement.style.color).toEqual('white');

    component.componentInstance.stream$.next({
      margin: '1px'
    });

    expect(nativeElement.style.background === 'red').toBeFalsy();
    expect(nativeElement.style.color === 'white').toBeFalsy();
    expect(nativeElement.style.margin).toEqual('1px');
  });

});
