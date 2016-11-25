import * as $ from 'jquery';

export class HttpAppRequest {

    public constructor() {}

    private _headers: Object = {};

    public getResponse(url: string, method: string, data: any, callback: (responseObject) => void) {

        $.ajax(url, {
            method: method,
            data: data,
            cache: false,
            headers: this._headers,
        }).done((response) => {
            callback(response);
        }).fail((jqXHR, errorText) => {
            callback({success: false, message: errorText, data: null});
        });
    }

    public setRequestHeader(header: string, value: string) {
        this._headers[header] = value;
    }
}