import {inject} from "@angular/core";
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export type PatchOptions = {
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

export function httpPatch<T>(url: string, body?: any, options?: PatchOptions): Observable<T> {
    const httpClient = inject(HttpClient);
    return httpClient.patch<T>(url, body, options);
}
