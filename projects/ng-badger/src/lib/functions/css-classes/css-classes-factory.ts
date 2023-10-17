import {ElementRef, inject, Renderer2} from "@angular/core";
import {CssClassesService} from "./css-classes.service";
import {CssClasses} from "./css-classes";

export function cssClassesFactory(): (elementRef: ElementRef) => (initWithCssClass: Array<string>) => CssClasses {
  const renderer = inject(Renderer2);
  return elementRef => {
    return initWithCssClass => {
      const hostClassesService = new CssClassesService(elementRef, renderer);
      hostClassesService.set(...initWithCssClass);
      return hostClassesService;
    }
  }
}
