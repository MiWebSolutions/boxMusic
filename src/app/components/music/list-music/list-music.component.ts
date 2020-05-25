import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { MusicService } from '../music.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CreateMusicComponent } from '../create-music/create-music.component';
import { Music } from '../../../shared/models/music';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {

  musics;
  closeResult = '';

  public user = {
    name: 'prueba',
    age: 26
  }

  constructor(private musicSvc:MusicService,
              private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getAllMusic();
  }

  getAllMusic()
  {
    return this.musicSvc.getAllMusic().subscribe(res => {
      this.musics = res;
    });
  }

  createMusic()
  {
    this.openModal();
  }

  editMusic(music : Music)
  {
    // this.openModal(music);
  }

  openModal(content?) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = this.user;
  }
}
