import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumComponent } from './album/album.component';
import { AlbumTracksComponent } from './album-tracks/album-tracks.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaylistsComponent,
    PlaylistComponent,
    AlbumsListComponent,
    AlbumComponent,
    AlbumTracksComponent,
    TrackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
