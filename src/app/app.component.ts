import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HackaLearn';
  greeting = 'Hello';


  changeTitle(newTitle: string | undefined) {
    console.log(newTitle);
    this.title = newTitle ?? '';
  }

}
