import { ReactiveClassDirective } from './reactive-class.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {Subject} from "rxjs";
import {By} from "@angular/platform-browser";

@Component({
  selector: 'app-test',
  template: '<div id="test" [reactiveClass]="stream$"></div>',
  standalone: true,
  imports: [
    ReactiveClassDirective
  ]
})
export class TestComponent {
  stream$ = new Subject<string | Array<string>>();
}

describe('ReactiveClassDirective', () => {

  let component!: ComponentFixture<TestComponent>
  let nativeElement!: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.createComponent(TestComponent);
    component.changeDetectorRef.detectChanges();
    nativeElement = component.debugElement.query(By.css('#test')).nativeElement as HTMLElement;
  });

  it('should not add any class when stream is empty', () => {
    expect(nativeElement.classList.length).toEqual(0);
  });

  it('should add class when stream emits a value', () => {
    component.componentInstance.stream$.next('badger');
    expect(nativeElement.classList.contains('badger')).toBeTrue();
  });

  it('should add class when stream emits an array of value', () => {
    component.componentInstance.stream$.next(['badger', 'snake']);
    expect(nativeElement.classList.contains('badger')).toBeTrue();
    expect(nativeElement.classList.contains('snake')).toBeTrue();
  });

  it('should reset class when stream emits multiple values', () => {
    component.componentInstance.stream$.next('badger');
    expect(nativeElement.classList.contains('badger')).toBeTrue();

    component.componentInstance.stream$.next('snake');
    expect(nativeElement.classList.contains('badger')).toBeFalse();
    expect(nativeElement.classList.contains('snake')).toBeTrue();
  });

  it('should reset class when stream emits multiple arrays of values', () => {
    component.componentInstance.stream$.next(['badger', 'snake']);
    expect(nativeElement.classList.contains('badger')).toBeTrue();
    expect(nativeElement.classList.contains('snake')).toBeTrue();

    component.componentInstance.stream$.next(['mushroom', 'flower']);
    expect(nativeElement.classList.contains('badger')).toBeFalse();
    expect(nativeElement.classList.contains('snake')).toBeFalse();
    expect(nativeElement.classList.contains('mushroom')).toBeTrue();
    expect(nativeElement.classList.contains('flower')).toBeTrue();
  });

});
