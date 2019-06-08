import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("actual", [
      transition("estado2<=>estado1", animate(400, keyframes([
        style({ opacity: "0", offset: 0 }),
        style({ opacity: "1", offset: 1 })
      ]))),

    ])
  ]
})
export class AppComponent {
  title = 'proyecto';
  actual = "estado1";
 

  actualiza() {
    if (this.actual=="estado1") {
      this.actual = "estado2";
    } else {
      this.actual = "estado1";      
    }


  }
}
