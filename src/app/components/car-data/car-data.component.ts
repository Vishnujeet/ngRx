import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CarModel } from "src/app/models/car-model";
import { GetAllCars, PostCars } from "src/app/store/actions/car-data.action";
import { IAppState, selectCarServiceState } from "src/app/store/app.states";
import { IState } from "src/app/store/reducers/car-data.reducer";



@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car-data.component.css']
  })
  
  export class CarListComponent implements OnInit{
       allCars:Array<CarModel>
       carsInput:FormGroup;
       state:Observable<any>;
       token:any;
       error: any;
       

    constructor(private fb: FormBuilder,private store: Store<IAppState>){
      this.state=this.store.select(selectCarServiceState)
    
    }

    ngOnInit(): void {
      this.state.subscribe((s: IState) => {
        this.error = s.error
      })
      this.token=localStorage.getItem("token");
      this.CreateCarDataForm();
    }

  CreateCarDataForm(){
      this.carsInput=this.fb.group({
        Brand:['',Validators.required],
        Model:['',Validators.required],
        Navigation:['',Validators.required]
      })
    }
    PostCar(){
      this.store.dispatch(new PostCars(this.CreateCarDataForm,this.token))
    }

    GetCar(authToken:string){
       this.store.dispatch(new GetAllCars(authToken))
    }
  }