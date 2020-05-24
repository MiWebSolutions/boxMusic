import { Component, OnInit } from '@angular/core';
import { MusicService } from "../music.service";

@Component({
  selector: 'app-create-music',
  templateUrl: './create-music.component.html',
  styleUrls: ['./create-music.component.scss']
})
export class CreateMusicComponent implements OnInit {

  musics;

  constructor(private musicSvc : MusicService) { }

  ngOnInit(): void {
    this.getAllMusic();
  }

  getAllMusic()
  {
    return this.musicSvc.getAllMusic().subscribe(res => {
      console.log(res);
    })
  }

}
