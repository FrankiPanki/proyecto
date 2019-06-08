import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carriba',
  templateUrl: './carriba.component.html',
  styleUrls: ['./carriba.component.css']
})
export class CarribaComponent implements OnInit {
@Input()
hola:String;
  constructor() { }

  ngOnInit() {
  //console.log(this.hola);
  }

}
