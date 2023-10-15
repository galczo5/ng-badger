import {Observable} from "rxjs";
import {ReactiveLifecycleDirective} from "./reactive-lifecycle.directive";
import {parameterlessHookStream} from "./parameterlessHookStream";

export function doCheck<T extends ReactiveLifecycleDirective>(component: T): Observable<void> {
  return parameterlessHookStream(component, 'ngDoCheck');
}
