import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NuevoVendehumoComponent } from "./pages/nuevo-vendehumo/nuevo-vendehumo.component";

const APP_ROUTES : Routes=[
    {path: 'home', component: HomeComponent}
    {path: 'nuevo-vendehumo', component : NuevoVendehumoComponent}

]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}