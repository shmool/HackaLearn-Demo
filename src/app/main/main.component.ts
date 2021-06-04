import { DemoAppsService } from './../demo-apps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myApps: any;

  constructor(private demoAppsService: DemoAppsService) {
  }

  ngOnInit(): void {
    this.myApps = this.demoAppsService.apps;
  }

  logClick(e: any) {
    console.log('gallery clicked', e);
    this.demoAppsService.addApp('cats app', 'Cat Lover');
  }


}
