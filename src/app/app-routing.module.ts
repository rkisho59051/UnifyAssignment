import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path:'login', component:LoginComponent },

  { path:'', redirectTo:'/login', pathMatch:'full'},

  { path:'dashboard', component: UserProfileComponent, canActivate: [AuthGuard] },

  { path:'**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
