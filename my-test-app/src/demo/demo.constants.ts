import {classify} from "@angular-devkit/core/src/utils/strings";
import {DefaultApiResponse} from "src/app/constants/app-constants";

export class DemoUrlConstants {
    public static API = {
        "getAll": "/rest",
        "getById": "/rest",
        "add": "/rest",
        "update": "/rest"
    }
}


export class GetDemoRequest {
    searchText: string;
    startDate: string;
    endDate: string;
    pageNumber: number;
    pageSize: number;
    sort: Sort[];
}

export class Sort {
    direction: string;
    property: string;
}

export interface GetDemoResponse extends DefaultApiResponse {
    list: DemoProto[];
    totalRecords: number;
}

export class DemoProto {
    message: string;
    payload: string;
    createdByName: string;
    createdOn: string;
}
