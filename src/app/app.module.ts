import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { Routes,RouterModule } from "@angular/router";

import {UsersComponent} from './users/users.component';
import {DetailComponent} from './detail/detail.component';

const appRoutes: Routes =[
  {path:'',component:UsersComponent},
  {path:'users',component:UsersComponent},
  {path:'detail/:id',component:DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
