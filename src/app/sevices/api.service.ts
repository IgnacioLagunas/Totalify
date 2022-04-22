import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getPlaylists(){
    return this.http.get(`${this.apiUrl}/playlists`)
  }

  getArtist(){
    const result = this.http.get(`${this.apiUrl}/artist/0TnOYISbd1XYRBk9myaseg`,{
      headers: { token: `${window.localStorage.getItem("token")}`}
      }
    )
    return result
  }

  getArtistAlbums(){
    const result = this.http.get(`${this.apiUrl}/artist/0TnOYISbd1XYRBk9myaseg/albums`,{
      headers: { token: `${window.localStorage.getItem("token")}`}
      }
    )
    return result
  }
  getAlbum(){
    const result = this.http.get(`${this.apiUrl}/album/0TnOYISbd1XYRBk9myaseg`,{
      headers: { token: `${window.localStorage.getItem("token")}`}
      }
    )
    return result
  }
}
