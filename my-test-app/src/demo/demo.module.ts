import { NgModule, CommonModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DemoListComponent } from './demo-list/demo-list.component';
import {DemoRoutingModule } from 'demo-routing.module';
import {classify} from "@angular-devkit/core/src/utils/strings";
import { SharedModule } from '@shared/shared.module';
import {DemoDialogComponent} from './demo-dialog/demo-dialog.component';


@NgModule({
    declarations: [DemoListComponent, DemoDialogComponent],
    imports: [
        SharedModule,
        DemoRoutingModule
    ],
    entryComponents: [DemoDialogComponent]
})
export class DemoModule {

}
