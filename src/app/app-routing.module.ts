import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MusicComponent } from './components/music/music.component';
import { ShowsComponent } from './components/shows/shows.component';
import { VideosComponent } from './components/videos/videos.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'music',
    component: MusicComponent
  },
  {
    path:'videos',
    component: VideosComponent
  },
  {
    path:'shows',
    component: ShowsComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
