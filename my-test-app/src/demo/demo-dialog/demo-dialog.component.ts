import {classify, dasherize} from "@angular-devkit/core/src/utils/strings";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import {DemoService} from './demo.service';
import {DemoProto} from './demo.constants';

@Component({
    selector: 'demo',
    templateUrl: './demo-dialog.component.html',
    styleUrls: ['./demo-dialog.component.scss']
})
export class DemoDialogComponent implements OnInit{

    public isUpdate = false;
    public data: DemoProto = new DemoProto();
    constructor(private crudService: DemoService, @Inject(MAT_DIALOG_DATA) public dialogData: any, private dialogRef: MatDialogRef< DemoDialogComponent>){}

    ngOnInit(){
        if(this.dialogData){
            this.isUpdate = this.dialogData.isUpdate;
        }
    }

    getById(): void {
        this.crudService.getById(this.dialogData.id)
            .subscribe((response) => {

            }, (err) => {
                console.log(err)
            });
    }

    onSave(){
        let subscriber$ = this.isUpdate ?  this.crudService.update(this.data) :  this.crudService.add(this.data);
        subscriber$.subscribe((response) => {
            if(response){
                this.dialogRef.close(true);
            }
        }, err => console.log(err));

    }
}
