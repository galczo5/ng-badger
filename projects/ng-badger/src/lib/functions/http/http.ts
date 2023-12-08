import {inject} from "@angular/core";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export function http<T>(request: HttpRequest<any>): Observable<HttpEvent<T>> {
    const httpClient = inject(HttpClient);
    return httpClient.request(request);
}

