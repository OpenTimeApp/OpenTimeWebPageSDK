import * as $ from 'jquery';

export class HttpAppRequest {

    private _headers: Object;

    public constructor() {
        this._headers = {};
    }

    public getResponse(url: string, method: string, data: any, callback: (responseObject) => void) {

        $.ajax(url, {
            method: method,
            data: data,
            cache: false,
            headers: this._headers,
            dataType: 'json'
        }).done((response) => {
            callback(response);
        }).fail((jqXHR, errorText) => {
            console.log(jqXHR.responseText);
            callback({success: false, message: errorText, data: null});
        });
    }

    public setRequestHeader(header: string, value: string) {
        this._headers[header] = value;
    }
}