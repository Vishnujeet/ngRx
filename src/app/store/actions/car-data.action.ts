import { Action } from "@ngrx/store";
import { CarModel } from "src/app/models/car-model";

export enum CarServiceType{
    GETCARS='[Car] GetAllCars',
    GETCAR_SUCCESS='[Car] SUCCESS',
    GETCAR_ERROR="[Car] LOGIN_ERROR",

    POSTCARS='[Car] GetAllCars',
    POSTCARS_SUCCESS='[Car] SUCCESS',
    POSTCARS_ERROR="[Car] LOGIN_ERROR"
    
}

export class GetAllCars implements Action{
    type: CarServiceType.GETCARS;
    constructor(public payload){}
}

export class GetCarSuccess implements Action{
    type: CarServiceType.GETCAR_SUCCESS;
    constructor(public payload:any){}
}

export class GetCarError implements Action{
    type: CarServiceType.GETCAR_ERROR;
    constructor(public payload:any){}
}

export class PostCars implements Action{
    type: CarServiceType.POSTCARS;
    constructor(public payload:any,token:string){}
}

export class PostCarsSuccess implements Action{
    type: CarServiceType.POSTCARS_SUCCESS;
    constructor(public payload:any){}
}

export class PostCarError implements Action{
    type: CarServiceType.POSTCARS_ERROR;
    constructor(public payload:any){}
}

export type CarServiceAction=
    | GetAllCars
    | GetCarSuccess
    | GetCarError
    | PostCars
    | PostCarsSuccess
    | PostCarError