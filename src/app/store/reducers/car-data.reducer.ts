import { state } from "@angular/animations";
import { State } from "@ngrx/store";
import { CarModel } from "src/app/models/car-model";
import { CarServiceAction, CarServiceType } from "../actions/car-data.action";

export interface IState{
    cars:Array<CarModel>;
    result?: any;
    isLoading?: boolean;
    isLoadingSuccess?: boolean;
    isLoadingFailure?: boolean;
    error:any;
    
}

export const initialState ={
    cars :[],
    result: '',
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingFailure: false,
    error:''  
};

export function reducer(state = initialState,action : CarServiceAction): IState{
    switch(action.type){
        case CarServiceType.GETCAR_SUCCESS:{
            return{
                ...state,
                isLoading:true,
                cars:[...state.cars,action.type],
                isLoadingFailure:false,
                isLoadingSuccess:true,
                result:'',
                error:null
                
            }
        }
        case CarServiceType.GETCAR_ERROR:{
            return {
                ...state,
                cars:[],
                isLoading:false,
                isLoadingFailure:true,
                isLoadingSuccess:false,
                error:''
            }
        }
        case CarServiceType.POSTCARS_SUCCESS:{
            return{
                ...state,
                cars:[...state.cars,action.type],
                isLoading:false,
                isLoadingFailure:false,
                isLoadingSuccess:false,
                error:''
            }
        }
        case CarServiceType.POSTCARS_ERROR:{
            return {
                ...state,
                isLoading:false,
                cars:[],
                isLoadingFailure:true,
                isLoadingSuccess:false,
                error:''
            }
        }
        default:
            return state;
    }

}