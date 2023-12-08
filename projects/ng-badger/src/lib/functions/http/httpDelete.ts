import {inject} from "@angular/core";
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export type DeleteOptions = {
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
    body?: any | null;
};

export function httpDelete<T>(url: string, options?: DeleteOptions): Observable<T> {
    const httpClient = inject(HttpClient);
    return httpClient.delete<T>(url, options);
}
