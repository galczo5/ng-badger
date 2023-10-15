export interface CssClasses {
  set(...cssClasses: Array<string>): void;

  add(...cssClasses: Array<string>): void;

  get(): Array<string>;

  contains(cssClass: string): boolean;

  remove(...cssClasses: Array<string>): void;

  removeAll(): void;

  swap(...cssClasses: Array<string>): Array<string>;

  toggle(...cssClasses: Array<string>): void;

  toString(): string;
}

