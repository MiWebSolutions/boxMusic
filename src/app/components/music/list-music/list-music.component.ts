import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {

  musics;

  constructor(private musicSvc:MusicService) { }

  ngOnInit(): void {
    this.getAllMusic();
  }

  getAllMusic()
  {
    return this.musicSvc.getAllMusic().subscribe(res => {
      this.musics = res;
    });
  }

}
