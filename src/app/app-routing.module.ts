import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PhotoComponent } from './photo/photo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  {path: '', redirectTo:'user', pathMatch:'full'},
  {path: 'user', component:UserComponent},
  {path: 'user/:id',  component:UserDetailComponent},
  {path: 'photos', component:PhotoComponent},
  {path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
