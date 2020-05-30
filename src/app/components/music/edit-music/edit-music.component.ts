import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../../../shared/models/music.interface';
import { MusicService } from '../music.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.scss']
})
export class EditMusicComponent implements OnInit {

  image:any;
  imageOriginal:any;

  @Input() music:Music;

  constructor(private musicSvc:MusicService,
              private modalService:NgbModal) { }


  editMusicForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl(''),
    album: new FormControl(''),
    image: new FormControl(''),
    spotifyUrl : new FormControl(''),
    deezerUrl : new FormControl(''),
    appleMusicUrl : new FormControl(''),
    googlePlayUrl : new FormControl(''),
    amazonMusicUrl : new FormControl(''),
    youtubeUrl : new FormControl(''),
    soundCloudUrl : new FormControl('')

  });

  ngOnInit(): void {
    this.image = this.music.image;
    this.imageOriginal = this.music.image;
    this.initValuesForm();
  }

  editMusic(music:Music)
  {
    this.musicSvc.editMusicById(music);
  }

  private initValuesForm() : void
  {
    this.editMusicForm.patchValue({
      id: this.music.id,
      name: this.music.name,
      album: this.music.album,
      spotifyUrl : this.music.spotifyUrl,
      deezerUrl : this.music.deezerUrl,
      appleMusicUrl : this.music.appleMusicUrl,
      googlePlayUrl : this.music.googlePlayUrl,
      amazonMusicUrl : this.music.amazonMusicUrl,
      youtubeUrl : this.music.youtubeUrl,
      soundCloudUrl : this.music.soundCloudUrl
    });
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }

  handleImage(event:any) : void
  {
    this.image = event.target.files[0];
  }

  editMusicWhitImage(music:Music)
  {
    if(this.image === this.imageOriginal)
    {
      music.image = this.imageOriginal;
      this.musicSvc.editMusicById(music);
    }
    else
    {
      this.musicSvc.editMusicById(music, this.image);
    }
  }
}
