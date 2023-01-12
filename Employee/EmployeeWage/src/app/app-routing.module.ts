import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './Components/addemp/addemp/addemp.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  
  {path:"addemp"  ,component:AddempComponent },
  {path:"display", component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
