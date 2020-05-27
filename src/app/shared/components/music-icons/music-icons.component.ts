import { Component, OnInit, Input } from '@angular/core';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-music-icons',
  templateUrl: './music-icons.component.html',
  styleUrls: ['./music-icons.component.scss']
})
export class MusicIconsComponent implements OnInit {

  constructor() { }
  @Input() spotify : string;
  @Input() deezer : string;
  @Input() apple : string;
  @Input() youtube : string;
  @Input() soundcloud : string;
    
  ngOnInit(): void {
  }

}
