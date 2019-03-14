import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent} from './search/search.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { MusicdetailsComponent } from './musicdetails/musicdetails.component';
import { from } from 'rxjs';

const routes: Routes = [
   {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home',component:HomeComponent},
  { path: 'result/:id', component:SearchComponent},
  {path:'favs',component:FavouriteComponent},
  {path:'details/:id',component:MusicdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
