import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Styles} from "./styles";
import {stylesFactory} from "./styles-factory";
import {By} from "@angular/platform-browser";

@Component({
  selector: 'app-test',
  template: '<div #test id="test"></div>',
  standalone: true
})
export class TestComponent implements OnInit {

  @ViewChild('test', {read: ElementRef, static: true})
  child!: ElementRef;

  test!: Styles;

  private factory = stylesFactory();

  ngOnInit() {
    this.test = this.factory(this.child)({color: 'initial'});
  }
}

describe('stylesFactory()', () => {

  let component!: ComponentFixture<TestComponent>;
  let nativeElement!: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.createComponent(TestComponent);
    component.changeDetectorRef.detectChanges();
    nativeElement = component.debugElement.query(By.css('#test')).nativeElement as HTMLElement;
  });

  it('should initialize with styles', () => {
    expect(nativeElement.style.color).toEqual('initial');
  });

  describe('set()', () => {
    it('should set styles to host element', () => {
      component.componentInstance.test.set({
        gap: '2px',
        display: 'flex'
      });

      expect(nativeElement.style.display).toEqual('flex');
      expect(nativeElement.style.gap).toEqual('2px');
    });

    it('should remove old styles from host element', () => {
      component.componentInstance.test.set({
        gap: '2px',
        display: 'flex'
      });

      expect(nativeElement.style.gap).toEqual('2px');
      expect(nativeElement.style.display).toEqual('flex');

      component.componentInstance.test.set({
        display: 'block'
      });

      expect(nativeElement.style.gap === '2px').toBeFalse();
      expect(nativeElement.style.display === 'flex').toBeFalse();
      expect(nativeElement.style.display).toEqual('block');
    });
  });

  describe('add()', () => {
    it('should add styles to host element', () => {
      component.componentInstance.test.add({gap: '2px'});
      expect(nativeElement.style.gap).toEqual('2px');

      component.componentInstance.test.add({display: 'flex'});
      expect(nativeElement.style.gap).toEqual('2px');
      expect(nativeElement.style.display).toEqual('flex');
    });
  });

  describe('get()', () => {
    it('should get styles from host element', () => {
      component.componentInstance.test.add({
        gap: '2px',
        display: 'flex'
      });

      expect(component.componentInstance.test.get()).toEqual({
        color: 'initial',
        gap: '2px',
        display: 'flex'
      });
    });
  });

  describe('contains()', () => {
    it('should return true when style is set', () => {
      component.componentInstance.test.add({display: 'flex'});
      expect(component.componentInstance.test.contains('display')).toBeTrue();
    });

    it('should return false when style is not set', () => {
      expect(component.componentInstance.test.contains('display')).toBeFalse();
    });
  });

  describe('remove()', () => {
    it('should remove styles from host element', () => {
      component.componentInstance.test.add({
        gap: '2px',
        display: 'flex'
      });

      expect(nativeElement.style.gap).toEqual('2px');
      expect(nativeElement.style.display).toEqual('flex');

      component.componentInstance.test.remove('gap');
      expect(nativeElement.style.gap).toBeFalsy();
      expect(nativeElement.style.display).toEqual('flex');
    });
  });

  describe('removeAll()', () => {
    it('should remove all styles from host element', () => {
      component.componentInstance.test.add({
        gap: '2px',
        display: 'flex'
      });

      expect(nativeElement.style.gap).toEqual('2px');
      expect(nativeElement.style.display).toEqual('flex');

      component.componentInstance.test.removeAll();
      expect(nativeElement.style.gap).toBeFalsy();
      expect(nativeElement.style.display).toBeFalsy();
      expect(nativeElement.style.color).toBeFalsy();
    });
  });

  describe('swap()', () => {
    it('should swap existing styles on host element', () => {
      component.componentInstance.test.set({
        gap: '2px',
        display: 'flex'
      });

      expect(nativeElement.style.gap).toEqual('2px');
      expect(nativeElement.style.display).toEqual('flex');

      const result = component.componentInstance.test.swap({width: '100px'});
      expect(result).toEqual({
        color: undefined,
        gap: '2px',
        display: 'flex'
      });

      expect(nativeElement.style.gap).toBeFalsy();
      expect(nativeElement.style.display).toBeFalsy();
      expect(nativeElement.style.width).toEqual('100px');
    });
  });

  describe('toString()', () => {
    it('should return string', () => {
      component.componentInstance.test.set({
        gap: '2px',
        display: 'flex'
      });

      expect(component.componentInstance.test.toString())
        .toEqual('gap:2px;display:flex');
    });
  });
});
