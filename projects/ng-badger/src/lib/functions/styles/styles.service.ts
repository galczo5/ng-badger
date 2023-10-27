import {ElementRef, Injectable, Renderer2} from '@angular/core';
import {Styles, StylesProperty, StylesPropertyName} from "../../types";

@Injectable()
export class StylesService implements Styles {

  private readonly nativeElement: HTMLElement;
  private styles: StylesProperty = {};

  constructor(
    elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.nativeElement = elementRef.nativeElement;
  }

  add(styles: StylesProperty): void {
    this.setStyles(styles);
    this.styles = {
      ...this.styles,
      ...styles
    };
  }

  contains(property: StylesPropertyName): boolean {
    return Object.keys(this.styles).includes(property) && !!this.styles[property];
  }

  get(): StylesProperty {
    return {...this.styles};
  }

  remove(...property: Array<StylesPropertyName>): void {
    const set = new Set(Object.keys(this.styles));
    const toRemove = [...(property || [])].filter(s => set.has(s));

    this.removeStyle(toRemove);

    const removedProperties = toRemove.reduce(
      (previousValue, currentValue) => ({
        ...previousValue,
        [currentValue]: undefined
      }),
      {}
    );

    this.styles = {
      ...this.styles,
      ...removedProperties
    }
  }

  removeAll(): void {
    this.remove(...Object.keys(this.styles) as Array<StylesPropertyName>);
  }

  set(styles: StylesProperty): void {
    const toRemove = Object.keys(this.styles)
      .filter(s => styles[s as keyof typeof styles] !== this.styles[s as keyof typeof this.styles]);

    const toAdd = Object.keys(styles)
      .filter(s => styles[s as keyof typeof styles] !== this.styles[s as keyof typeof this.styles])
      .reduce(
        (previousValue, currentValue) => ({
          ...previousValue,
          [currentValue]: styles[currentValue as keyof StylesProperty]
        }),
        {}
      );

    console.log({
      toAdd, toRemove
    })

    this.remove(...toRemove as Array<StylesPropertyName>);
    this.add(toAdd as StylesProperty);
  }

  swap(styles: StylesProperty): StylesProperty {
    const prev = {...this.styles};
    this.set(styles);
    return prev;
  }

  toString(): string {
    return Object.entries(this.styles)
      .filter(e => !!e[0] && !!e[1])
      .map(e => e.join(':'))
      .join(';')
  }

  private removeStyle(property: Array<StylesPropertyName>): void {
    for (const name of property) {
      this.renderer.removeStyle(this.nativeElement, name)
    }
  }

  private setStyles(styles: StylesProperty): void {
    for (const [name, value] of Object.entries(styles)) {
      this.renderer.setStyle(this.nativeElement, name, value)
    }
  }
}
