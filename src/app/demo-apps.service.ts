import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoAppsService {
  apps = [
    {name: 'Angular App', author: 'Shmuela'},
    {name: 'Azure App', author: 'Moeid'},
  ]

  constructor() { }

  addApp(name: string, author: string) {
    this.apps.push(
      { name, author }
    )
  }
}
