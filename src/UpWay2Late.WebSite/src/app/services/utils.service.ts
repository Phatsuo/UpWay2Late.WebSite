import { Injectable } from '@angular/core';

declare var dateFormat: any;

@Injectable()
export class UtilsService {

    constructor() { }

    dateFrmt(date, fmt) {
        return dateFormat(date, fmt);
    }
}
