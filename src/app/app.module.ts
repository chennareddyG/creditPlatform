import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { SharedMaterialModule } from './shared-material.module';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { InfoCardComponent } from './info-card/info-card.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApplyCardComponent } from './apply-card/apply-card.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    CustomerListComponent,
    HomeComponent,
    InfoCardComponent,
    CardsListComponent,
    PageNotFoundComponent,
    ApplyCardComponent,
    UpdateUserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedMaterialModule
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
