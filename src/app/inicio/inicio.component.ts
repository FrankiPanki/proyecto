import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor() { }

@ViewChild('ruleta') parrafo1:ElementRef;
@ViewChild('seno') parrafo2:ElementRef;
@ViewChild('coseno') parrafo3:ElementRef;
@ViewChild('cicloide') parrafo4:ElementRef;
@ViewChild('epicicloide') parrafo5:ElementRef;
@ViewChild('hipocicloide') parrafo6:ElementRef;
  
  ngOnInit(){
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
        window.scroll({ top: (this.parrafo4.nativeElement.offsetTop - 40), behavior: "smooth" });
        //this.parrafo4.nativeElement.scrollIntoView({ block: 'center',  behavior: 'smooth' });
        break;
      case 4:
        window.scroll({ top: (this.parrafo5.nativeElement.offsetTop - 40), behavior: "smooth" });
        //this.parrafo5.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        break;
      case 5:
        window.scroll({ top: (this.parrafo6.nativeElement.offsetTop - 40), behavior: "smooth" });
        //this.parrafo6.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        break;
      case 6:
            window.scroll({ top: 0, behavior: "smooth" });
          break;    
      default:
        break;
    }}




}
