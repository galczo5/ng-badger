import type * as CSS from 'csstype';

export type StylesProperty = CSS.PropertiesHyphen;
export type StylesPropertyName = keyof CSS.PropertiesHyphen;

export interface Styles {
  set(styles: StylesProperty): void;

  add(styles: StylesProperty): void;

  get(): StylesProperty;

  contains(property: StylesPropertyName): boolean;

  remove(...property: Array<StylesPropertyName>): void;

  removeAll(): void;

  swap(styles: StylesProperty): StylesProperty;

  toString(): string;
}

