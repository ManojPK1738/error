import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AddcargoComponent } from './addcargo/addcargo.component';
import { AppComponent } from './app.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { AssginCargoComponent } from './assgin-cargo/assgin-cargo.component';
import { ViewcargostatusComponent } from './viewcargostatus/viewcargostatus.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashbaordComponent },
  { path: 'addcargo', component: RegistrationComponent},  
  { path: 'assgin-cargo', component: AssginCargoComponent },  
  { path: 'viewcargostatus', component: ViewcargostatusComponent },  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path :'**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
