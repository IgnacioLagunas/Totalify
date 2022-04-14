import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Input() title:string;
  @Input() playlist: {title: string , artists: string[]};

  constructor() { }

  ngOnInit(): void {
  }

  getArtist(artistName:string){
    console.log(artistName)
  }

}
