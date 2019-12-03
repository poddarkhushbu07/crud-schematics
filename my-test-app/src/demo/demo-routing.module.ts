import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {classify} from "@angular-devkit/core/src/utils/strings";
import { DemoListComponent } from './demo-list.component';


const routes: Routes = [
    {
        path: 'list',
        component: DemoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule {
}
