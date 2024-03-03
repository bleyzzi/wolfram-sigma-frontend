import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { RegistrationRoutingModule } from './registration-screen-routing.module';



@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationScreenModule { }
