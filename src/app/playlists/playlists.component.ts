import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  playlists = [
    {
      title: 'Focus Time',
      artists: ['Skrillex', 'Aviccii', 'Rosalia']
    },
    {
      title: 'Hotfixeando Ando',
      artists: ['La Noche', 'Aviccii', 'Rosalia']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
