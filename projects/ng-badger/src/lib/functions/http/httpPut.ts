import {inject} from "@angular/core";
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export type PutOptions = {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}

export function httpPut<T>(url: string, body?: any, options?: PutOptions): Observable<T> {
    const httpClient = inject(HttpClient);
    return httpClient.put<T>(url, body, options);
}
