import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { SnowComponent } from '../utilcomp/snow/snow.component';

export const routes: Routes = [

    { path: '', component: HomepageComponent},
    { path: 'snow', component: SnowComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }
