import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {

  constructor() { }
  @ViewChild('cicloide') parrafo1:ElementRef;
  @ViewChild('epicicloide') parrafo2:ElementRef;
  @ViewChild('hipocicloide') parrafo3:ElementRef;

  ngOnInit() {
    $(window).scroll(function(){
      if ($(window).scrollTop()>55.9) {
        $("#nav").addClass('fixed-top');
      } else {
        $("#nav").removeClass('fixed-top');
      }
    });
  }

  scrol(numero: number){
    switch (numero) {
      case 0:
        window.scroll({ top: (this.parrafo1.nativeElement.offsetTop - 40), behavior: "smooth" });
        //this.parrafo1.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        break;
      case 1:
        window.scroll({ top: (this.parrafo2.nativeElement.offsetTop - 40), behavior: "smooth" });
        //this.parrafo2.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        break;
      case 2:
        window.scroll({ top: (this.parrafo3.nativeElement.offsetTop - 40), behavior: "smooth" });
        //this.parrafo3.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        break;
      case 3:
            window.scroll({ top: 0, behavior: "smooth" });
          break;    
      default:
        break;
    }}



}
