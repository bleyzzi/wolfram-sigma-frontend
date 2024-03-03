import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainViewComponent } from "./main-view/main-view.component";

const registrationRoutes: Routes = [
    {
        path: 'registration', component: MainViewComponent,
        //children:
    }

];

@NgModule({
    imports: [RouterModule.forChild(registrationRoutes)],
    exports: [RouterModule]
})
export class RegistrationRoutingModule { }