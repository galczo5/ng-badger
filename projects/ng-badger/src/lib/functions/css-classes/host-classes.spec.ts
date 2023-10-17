import {Component} from "@angular/core";
import {hostClasses} from './host-classes'
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'test',
  template: '',
  standalone: true,
  imports: [CommonModule]
})
export class TestComponent {
  test = hostClasses('initial');
}

describe('hostClasses()', () => {

  let component!: ComponentFixture<TestComponent>;
  let nativeElement!: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    component = TestBed.createComponent(TestComponent);
    nativeElement = component.debugElement.nativeElement as HTMLElement;
  })

  it('should initialize with classes', () => {
    expect(nativeElement.classList.contains('initial')).toBeTrue();
  });

  describe('set', () => {
    it('should set classes to host element', () => {
      component.componentInstance.test.set('badger', 'mushroom');
      expect(nativeElement.classList.contains('badger')).toBeTrue();
      expect(nativeElement.classList.contains('mushroom')).toBeTrue();
    });

    it('should remove old classes from host element', () => {
      component.componentInstance.test.set('badger', 'mushroom');
      expect(nativeElement.classList.contains('badger')).toBeTrue();
      expect(nativeElement.classList.contains('mushroom')).toBeTrue();

      component.componentInstance.test.set('snake');
      expect(nativeElement.classList.contains('badger')).toBeFalse();
      expect(nativeElement.classList.contains('mushroom')).toBeFalse();
      expect(nativeElement.classList.contains('snake')).toBeTrue();
    });
  });

  describe('add', () => {
    it('should add classes to host element', () => {
      component.componentInstance.test.add('badger');
      expect(nativeElement.classList.contains('badger')).toBeTrue();

      component.componentInstance.test.add('mushroom');
      expect(nativeElement.classList.contains('mushroom')).toBeTrue();
    });

    it('should not remove old classes from host element', () => {
      component.componentInstance.test.add('badger', 'mushroom');
      expect(nativeElement.classList.contains('badger')).toBeTrue();
      expect(nativeElement.classList.contains('mushroom')).toBeTrue();

      component.componentInstance.test.add('snake');
      expect(nativeElement.classList.contains('badger')).toBeTrue();
      expect(nativeElement.classList.contains('mushroom')).toBeTrue();
      expect(nativeElement.classList.contains('snake')).toBeTrue();
    });
  });

  describe('get', () => {
    it('should get active class list', () => {
      component.componentInstance.test.add('badger', 'mushroom');
      expect(component.componentInstance.test.get()).toEqual(['initial', 'badger', 'mushroom']);
    });
  });

  describe('contains', () => {
    it('should return true when class is set', () => {
      component.componentInstance.test.add('badger');
      expect(component.componentInstance.test.contains('badger')).toBeTrue();
    });

    it('should return false when class is not set', () => {
      expect(component.componentInstance.test.contains('badger')).toBeFalse();
    });
  });

  describe('remove', () => {
    it('should remove class', () => {
      component.componentInstance.test.add('badger');
      expect(component.componentInstance.test.contains('badger')).toBeTrue();

      component.componentInstance.test.remove('badger');
      expect(component.componentInstance.test.contains('badger')).toBeFalse();
    });

    it('should do nothing if class is not set', () => {
      component.componentInstance.test.remove('badger');
      expect(component.componentInstance.test.contains('badger')).toBeFalse();
    });
  });

  describe('removeAll', () => {
    it('should remove all classes', () => {
      component.componentInstance.test.add('badger');
      expect(component.componentInstance.test.contains('badger')).toBeTrue();

      component.componentInstance.test.removeAll();
      expect(component.componentInstance.test.contains('initial')).toBeFalse();
      expect(component.componentInstance.test.contains('badger')).toBeFalse();
      expect(component.componentInstance.test.get().length).toEqual(0);
    });
  });

  describe('swap', () => {
    it('should swap existing classes', () => {
      component.componentInstance.test.add('badger');
      expect(component.componentInstance.test.contains('badger')).toBeTrue();
      expect(component.componentInstance.test.contains('initial')).toBeTrue();

      const result = component.componentInstance.test.swap('mushroom');
      expect(result).toEqual(['initial', 'badger'])
      expect(component.componentInstance.test.contains('badger')).toBeFalse();
      expect(component.componentInstance.test.contains('initial')).toBeFalse();
      expect(component.componentInstance.test.contains('mushroom')).toBeTrue();
    });
  });

  describe('toggle', () => {
    it('should add class if not set', () => {
      component.componentInstance.test.toggle('badger');
      expect(component.componentInstance.test.contains('badger')).toBeTrue();
    });

    it('should remove class if set', () => {
      component.componentInstance.test.add('badger');
      expect(component.componentInstance.test.contains('badger')).toBeTrue();

      component.componentInstance.test.toggle('badger');
      expect(component.componentInstance.test.contains('badger')).toBeFalse();
    });
  });

  describe('toString', () => {
    it('should return string', () => {
      component.componentInstance.test.add('badger', 'mushroom');
      expect(component.componentInstance.test.toString()).toEqual('initial badger mushroom');
    });
  });

});
