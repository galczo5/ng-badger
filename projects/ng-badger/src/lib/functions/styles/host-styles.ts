import {ElementRef, inject} from "@angular/core";
import {Styles, StylesProperty} from "../../types";
import {stylesFactory} from "./styles-factory";

export function hostStyles(initWithStyles: StylesProperty): Styles {
  return stylesFactory()(inject(ElementRef))(initWithStyles);
}
