import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {hostListener} from "./host-listener";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {take} from "rxjs";

@Component({
  selector: 'app-test',
  template: '',
  standalone: true,
  imports: [CommonModule]
})
export class TestComponent {
  test$ = hostListener('click');
}

describe('hostListener()', () => {

  let component!: ComponentFixture<TestComponent>;
  let nativeElement!: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.createComponent(TestComponent);
    nativeElement = component.debugElement.nativeElement as HTMLElement;
  })

  it('should create a stream of events', done => {
    component.componentInstance.test$
      .pipe(
        take(1)
      )
      .subscribe(() => {
        expect(true).toBeTruthy();
        done();
      });

      nativeElement.click();
  });

});
