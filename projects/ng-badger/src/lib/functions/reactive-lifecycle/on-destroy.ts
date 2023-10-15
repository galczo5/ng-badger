import {Observable} from "rxjs";
import {ReactiveLifecycleDirective} from "./reactive-lifecycle.directive";
import {parameterlessHookStream} from "./parameterlessHookStream";

export function onDestroy<T extends ReactiveLifecycleDirective>(component: T): Observable<void> {
  return parameterlessHookStream(component, 'ngOnDestroy');
}
