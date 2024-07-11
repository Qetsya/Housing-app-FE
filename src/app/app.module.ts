import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './services/login.service';
import { HousingListComponent } from './housing/housing-list/housing-list.component';
import { HouseDetailsComponent } from './housing/house/house-details/house-details.component';
import { HousingComponent } from './housing/housing.component';
import { HouseComponent } from './housing/house/house.component';
import { BillsComponent } from './housing/house/bills/bills.component';
import { LoadingSpinnerComponent } from './shared/loader/loading-spinner.component';
import { DataStorageService } from './services/data-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header/header.component';
import { ProvidersComponent } from './providers/providers.component';
import { NewHouseComponent } from './housing/house/new-house/new-house.component';

@NgModule({
  declarations: [AppComponent, HousingComponent, BillsComponent, ProvidersComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    LoginFormComponent,
    ReactiveFormsModule,
    HousingListComponent,
    HouseDetailsComponent,
    HouseComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    NewHouseComponent
  ],
  providers: [provideAnimationsAsync(), LoginService, DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
