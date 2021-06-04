import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface App {
  name: string;
  author: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() demoApps: App[] = [];
  @Output() galleryClick = new EventEmitter();
  mydate = new Date();
  active = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.active = !this.active;
    this.galleryClick.emit({clicked: true});
  }

}
