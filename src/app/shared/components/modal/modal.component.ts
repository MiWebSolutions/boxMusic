import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../../models/music.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit {
  
  @Input() music:Music;
  
  constructor() { }

  ngOnInit(): void {
  }

}
