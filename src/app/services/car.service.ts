import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CarModel } from "../models/car-model";

@Injectable({
    providedIn:"root"
})
export class CarService{
    private baseUrl = environment.apiUrl;
    constructor(private _http: HttpClient) { }

    InsertNewCars(car:CarModel,token:string){
        return this._http.post<CarModel>(`${this.baseUrl}/AddCar`,{car},{headers:new HttpHeaders({
            "Authorization-Token":token
        })});
    }

    GetAllCars(token:string){
        return this._http.get<CarModel>(`${this.baseUrl}/GetCars`,{headers:new HttpHeaders({
            "Authorization-Token":token
        })});
    }
}