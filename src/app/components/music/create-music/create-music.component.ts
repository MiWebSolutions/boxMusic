import { Component, OnInit, Input } from '@angular/core';
import { MusicService } from "../music.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Music } from '../../../shared/models/music';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-music',
  templateUrl: './create-music.component.html',
  styleUrls: ['./create-music.component.scss']
})
export class CreateMusicComponent implements OnInit {

  musics;

  constructor(private musicSvc : MusicService,
              private modalService:NgbModal) { }

  @Input() public user;

  public newMusicForm = new FormGroup({
    name : new FormControl('', Validators.required),
    album : new FormControl(''),
    image : new FormControl('')
  });

  ngOnInit(): void {
  }

  async createMusic(music:Music)
  {
    try{
      await this.musicSvc.createMusic(music);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }

}
