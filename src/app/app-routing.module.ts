import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component";
import { HousingListComponent } from "./housing/housing-list/housing-list.component";
import { HouseDetailsComponent } from "./housing/house/house-details/house-details.component";
import { HousingComponent } from "./housing/housing.component";
import { HouseComponent } from "./housing/house/house.component";
import { BillsComponent } from "./housing/house/bills/bills.component";
import { ProvidersComponent } from "./providers/providers.component";
import { NewHouseComponent } from "./housing/house/new-house/new-house.component";

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'housing-list', component: HousingComponent, 
    children: [
    {path: '', component: HousingListComponent},
    {path: 'providers', component: ProvidersComponent},
    {path: ':id', component: HouseComponent, 
      children: [
      {path: '', redirectTo: 'details', pathMatch: 'full'},
      {path: 'details', component: HouseDetailsComponent},
      {path: 'bills', component: BillsComponent},
      ]
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
