import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Observable, take} from "rxjs";
import {listenerFactory} from "./listener";
import {By} from "@angular/platform-browser";

@Component({
  selector: 'app-test',
  template: '<div #test id="test"></div>',
  standalone: true,
  imports: [CommonModule]
})
export class TestComponent implements OnInit {

  @ViewChild('test', {read: ElementRef, static: true})
  child!: ElementRef;

  test$!: Observable<MouseEvent>;
  private factory = listenerFactory<MouseEvent>('click');

  ngOnInit() {
    this.test$ = this.factory(this.child);
  }
}

describe('listenerFactory()', () => {

  let component!: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.createComponent(TestComponent);
    component.changeDetectorRef.detectChanges();
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

    component.debugElement.query(By.css('#test')).nativeElement.click();
  });

});
