import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from './guard/auth.guard';
import { CardsListComponent } from './cards-list/cards-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApplyCardComponent } from './apply-card/apply-card.component';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path:'cards',  component : CardsListComponent,canActivate: [AuthGuard]},
  {path: 'signup', component: SignUpComponent},
  {path: 'users', component: CustomerListComponent,canActivate: [AuthGuard]},
  {path: 'applyCard', component: ApplyCardComponent,canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
