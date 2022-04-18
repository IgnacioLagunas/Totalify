import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumTracksComponent } from './album-tracks/album-tracks.component';
import { LoginComponent } from './login/login.component';
import { PlaylistsComponent } from './playlists/playlists.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "playlists", component: PlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
