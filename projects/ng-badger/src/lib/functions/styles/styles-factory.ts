import {ElementRef, inject, Renderer2} from "@angular/core";
import {StylesService} from "./styles.service";
import {Styles, StylesProperty} from "../../types";

export function stylesFactory(): (elementRef: ElementRef) => (initWithStyles: StylesProperty) => Styles {
  const renderer = inject(Renderer2);
  return elementRef => {
    return initWithStyles => {
      const stylesService = new StylesService(elementRef, renderer);
      stylesService.set(initWithStyles);
      return stylesService
    }
  }
}

