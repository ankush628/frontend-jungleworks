import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full' },
  { path: 'home', title: 'Home', component: HomeComponent, canActivate:[authGuard]},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', title: '404-Not Found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
