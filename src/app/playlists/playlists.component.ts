import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../sevices/api.service';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  token: string | null;
  playlists: any = []
  message: String = 'no actualizado';

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    // let token = window.localStorage.getItem("token")

    this.route.queryParams.subscribe(params=>{
      window.localStorage.setItem("token", params["code"])
      this.token = window.localStorage.getItem("token")
      console.log(this.token)
    })

    this.apiService.getPlaylists().subscribe(response=>{
      this.playlists = response
      this.message = 'Actualizado'
      console.log(this.playlists.playlists)
    });

    this.apiService.getArtist().subscribe(response=>{
      console.log(response)
    });

  }

}
