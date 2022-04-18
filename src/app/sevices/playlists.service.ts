import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  private apiUrl = 'http://localhost:3000/playlists'
  private spotifyUrl = 'https://api.spotify.com/v1'

  constructor(private http: HttpClient) { }

  getPlaylists(){
    return this.http.get(this.apiUrl)
  }

  // getGenres(){
  //   const result = this.http.get(`${this.spotifyUrl}/browse/categories`)
  // }
}
