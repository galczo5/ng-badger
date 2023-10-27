import {ElementRef, Injectable, Renderer2} from '@angular/core';
import {CssClasses} from "../../types";

@Injectable()
export class CssClassesService implements CssClasses {

  private readonly nativeElement: HTMLElement;
  private classes: ReadonlyArray<string> = [];

  constructor(
    elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.nativeElement = elementRef.nativeElement;
  }

  add(...cssClasses: Array<string>): void {
    const classes = [...(cssClasses || [])]
    this.addClasses(classes);
    this.setClasses([...this.classes, ...classes])
  }

  contains(cssClass: string): boolean {
    return this.classes.includes(cssClass);
  }

  get(): Array<string> {
    return [...this.classes];
  }

  remove(...cssClasses: Array<string>): void {
    const classes = [...(cssClasses || [])]
    this.removeClasses(classes);

    const set = new Set(classes);
    this.setClasses(this.classes.filter(c => !set.has(c)))
  }

  removeAll(): void {
    this.removeClasses(this.classes);
    this.setClasses([]);
  }

  set(...cssClasses: Array<string>): void {
    const classes = [...(cssClasses || [])]
    const set = new Set(classes);
    const toRemove = this.classes.filter(c => !set.has(c));
    const toAdd = Array.from(classes).filter(c => !this.classes.includes(c));

    this.removeClasses(toRemove);
    this.addClasses(toAdd);
    this.setClasses(classes);
  }

  swap(...cssClasses: Array<string>): Array<string> {
    const classes = [...(cssClasses || [])]
    const prev = [...this.classes];
    this.set(...classes);
    return prev;
  }

  toggle(...cssClasses: Array<string>): void {
    const set = new Set(this.classes);
    const toAdd = cssClasses.filter(c => !set.has(c));
    const toRemove = cssClasses.filter(c => set.has(c));
    this.add(...toAdd);
    this.remove(...toRemove);
  }

  toString(): string {
    return this.classes.join(' ');
  }

  private addClasses(cssClasses: ReadonlyArray<string>): void {
    for (const cssClass of new Set(cssClasses).values()) {
      this.renderer.addClass(this.nativeElement, cssClass);
    }
  }

  private removeClasses(cssClasses: ReadonlyArray<string>): void {
    for (const cssClass of new Set(cssClasses).values()) {
      this.renderer.removeClass(this.nativeElement, cssClass);
    }
  }

  private setClasses(cssClasses: ReadonlyArray<string>): void {
    this.classes = Array.from(new Set(cssClasses));
  }
}
