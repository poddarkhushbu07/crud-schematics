import {classify, dasherize} from "@angular-devkit/core/src/utils/strings";
import {MatDialog} from '@angular/dialog'
import {DemoDialogComponent} from './demo-dialog.component';
import {DemoService} from './demo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableFiltersState } from '@shared/table-filters/table-filters.constants';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { GetDemoResponse, DemoProto, GetDemoRequest } from './Demo.constants.ts';

@Component({
    selector: 'app-demo-list',
    templateUrl: './demo-list.component.html',
    styleUrls: ['./demo-list.component.scss']

})
export class DemoListComponent implements OnInit{

    public displayedColumns: string[] = ['Column1', 'Column2', 'Column3', 'Column4'];
    public dataSource = new MatTableDataSource<DemoProto>();
    public state: TableFiltersState = new TableFiltersState();
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    public requestPayload: GetDemoRequest = new GetDemoRequest();

    constructor(private crudService: DemoService, private dialog: MatDialog){}

    ngOnInit() {
        this.paginator.pageSize = 10;
        this.getDemoList();
    }


    public getDemoList() : void{
        this.requestPayload.pageSize = this.paginator.pageSize;
        this.requestPayload.pageNumber = this.paginator.pageIndex + 1;
        this.crudService.getAuditLogs(this.requestPayload)
            .subscribe((response) => {
                this.dataSource.data = response.list;
                this.paginator.length = response.totalRecords;
            });
    }


    onOpenDialog(isUpdate = false): void{
        this.dialog.open(DemoDialogComponent, {})
            .afterClosed()
            .subscribe((result) => {
                if(result){
                    this.getDemoList();
                }
            });
    }


    onReset(): void {
        this.state = new TableFiltersState();
        this.paginator.pageIndex = 0;
        this.requestPayload = new GetDemoRequest();
        this.sort.active = null;
        this.sort.direction = null;
        this.sort._stateChanges.next();
        this.getDemoList();
    }

    onPageChange(event: PageEvent): void {
        this.paginator.pageIndex = event.pageIndex;
        this.paginator.pageSize = event.pageSize;
        this.getDemoList();
    }

}
