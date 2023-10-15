import {Observable} from "rxjs";
import {ReactiveLifecycleDirective} from "./reactive-lifecycle.directive";
import {parameterlessHookStream} from "./parameterlessHookStream";

export function afterContentChecked<T extends ReactiveLifecycleDirective>(component: T): Observable<void> {
  return parameterlessHookStream(component, 'ngAfterContentChecked');
}
