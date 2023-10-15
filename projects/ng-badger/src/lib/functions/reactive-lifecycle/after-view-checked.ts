import {Observable} from "rxjs";
import {ReactiveLifecycleDirective} from "./reactive-lifecycle.directive";
import {parameterlessHookStream} from "./parameterlessHookStream";

export function afterViewChecked<T extends ReactiveLifecycleDirective>(component: T): Observable<void> {
  return parameterlessHookStream(component, 'ngAfterViewChecked');
}
