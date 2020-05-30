import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { MusicService } from '../music.service';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CreateMusicComponent } from '../create-music/create-music.component';
import { Music } from '../../../shared/models/music.interface';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { DeleteAlertComponent } from '../../../shared/components/delete-alert/delete-alert.component';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {

  musics;
  
  constructor(private musicSvc:MusicService,
              private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getAllMusic();
  }

  async getAllMusic()
  {
    return await this.musicSvc.getAllMusic().subscribe(res => {
      this.musics = res;
    });
  }

  createMusic()
  {
    this.openModal();
  }

  editMusic(music : Music)
  {
    this.openModal(music);
  }

  openModal(music?:Music) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.music = music;
  }

  deleteAlert(music:Music)
  {
    const modalRef = this.modalService.open(DeleteAlertComponent);
    modalRef.componentInstance.music = music;
  }
}
