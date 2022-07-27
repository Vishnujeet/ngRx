import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.states';
import { HomeComponent } from './components/home/home.component';
import { CarService } from './services/car.service';
import { CarDataEffects } from './store/effects/car-data.effects';
import { CarListComponent } from './components/car-data/car-data.component';



const routes: Route[] = [
  {
    path: 'login', component: LogInComponent,
  },
  
   {
    path: 'home', component: HomeComponent
  },
  {
    path: 'car', component: CarListComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
]


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers,{}),
    EffectsModule.forRoot([AuthEffects,CarDataEffects]),
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, LogInComponent, SignUpComponent, HomeComponent ],
  bootstrap:    [ AppComponent],
  providers: [AuthService,CarService]
})
export class AppModule { }
