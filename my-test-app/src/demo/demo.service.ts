import { Injectable } from '@angular/core';
import { WebService } from 'web-service';
import {classify} from "@angular-devkit/core/src/utils/strings";
import { ToasterService } from 'src/app/core/toaster';


import { DemoUrlConstants } from './Demo.constants.ts';
import { Observable } from 'rxjs';

@Injectable()
export class DemoService {

    constructor(private webService: WebService, private toaster: ToasterService) {
    }

    getAll(): Observable<any> {
        return new Observable((observe) => {
            this.webService.get(DemoUrlConstants.API.getAll)
                .subscribe((response) => {
                    if (response.status.code === 200) {
                        observe.next(response);
                    } else {
                        observe.error(response);
                        this.toaster.showToast(response.status.message, 'error');
                    }
                    observe.complete();
                }, (error) => {
                    observe.error(error);
                    observe.complete();
                });
        });
    }

    getById(id: string): Observable<DemoProto> {
        return new Observable((observe) => {
            this.webService.get(DemoUrlConstants.API.getById+ id)
                .subscribe((response) => {
                    if (response.status.code === 200) {
                        observe.next(response);
                    } else {
                        observe.error(response);
                        this.toaster.showToast(response.status.message, 'error');
                    }
                    observe.complete();
                }, (error) => {
                    observe.error(error);
                    observe.complete();
                });
        });
    }

    add(data: string): Observable<any> {
        return new Observable((observe) => {
            this.webService.post(DemoUrlConstants.API.add, data)
                .subscribe((response) => {
                    if (response.status.code === 200) {
                        observe.next(response);
                    } else {
                        observe.error(response);
                        this.toaster.showToast(response.status.message, 'error');
                    }
                    observe.complete();
                }, (error) => {
                    observe.error(error);
                    observe.complete();
                });
        });
    }

    update(data: string): Observable<any> {
        return new Observable((observe) => {
            this.webService.put(DemoUrlConstants.API.update, data)
                .subscribe((response) => {
                    if (response.status.code === 200) {
                        observe.next(response);
                    } else {
                        observe.error(response);
                        this.toaster.showToast(response.status.message, 'error');
                    }
                    observe.complete();
                }, (error) => {
                    observe.error(error);
                    observe.complete();
                });
        });
    }
}
