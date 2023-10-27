import {ElementRef, inject} from "@angular/core";
import {CssClasses} from "../../types";
import {cssClassesFactory} from "./css-classes-factory";

export function hostClasses(...initWithCssClass: Array<string>): CssClasses {
  return cssClassesFactory()(inject(ElementRef))(initWithCssClass);
}
