import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../../models/music.interface';
import { MusicService } from '../../../components/music/music.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.scss']
})
export class DeleteAlertComponent implements OnInit {

  @Input() music:Music;
  constructor(private musicSvc:MusicService,
              private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  deleteMusic(music:Music)
  {
    return this.musicSvc.deleteMusicById(music);
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }
}
