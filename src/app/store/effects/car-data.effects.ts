import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { CarService } from "src/app/services/car.service";
import { CarServiceType, GetAllCars, GetCarError, GetCarSuccess, PostCarError, PostCars, PostCarsSuccess } from "../actions/car-data.action";

@Injectable()
export class CarDataEffects{  
 
    @Effect()
    InsertCarData: Observable<any> = this.actions.pipe(
      ofType(CarServiceType.POSTCARS),
      map((action: PostCars) => action.payload),
      switchMap(payload => {
        return this.carService.InsertNewCars(payload, localStorage.getItem('token')).pipe(
          map((payload: any) => {
            console.log(payload.Content);
            return new PostCarsSuccess(payload);
          }),
          catchError((error) => {
            return of(new PostCarError({error}));
          })
        )
      })
    )

    GetAllCarsData: Observable<any> = this.actions.pipe(
      ofType(CarServiceType.GETCARS),
      map((action: GetAllCars) => action.payload),
      switchMap(payload => {
        return this.carService.GetAllCars(localStorage.getItem('token')).pipe(
          map((payload: any) => {
            console.log(payload.Content);
            return new GetCarSuccess({payload});
          }),
          catchError((error) => {
            return of(new GetCarError({error}));
          })
        )
      })
    )   


  constructor(
    private actions: Actions,
    private carService: CarService,
  ) {

  }
}