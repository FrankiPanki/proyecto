import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import * as $ from "jquery";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger("actual", [
      transition("void=>*", [
        style({ transform: 'translateX(0%) rotate(0deg)'        
        }),
        animate("1.5s")
      ])
    ])
  ]

})
export class InfoComponent implements OnInit {
@ViewChild('inicio') parrafo1:ElementRef;
@ViewChild('cicloides') parrafo2:ElementRef;
@ViewChild('epicicloides') parrafo3:ElementRef;
@ViewChild('hipocicloides1') parrafo4:ElementRef;
@ViewChild('hipocicloides2') parrafo5:ElementRef;

actual ;


//parrafos: ElementRef [] = [this.parrafo1, this.parrafo2, this.parrafo3, this.parrafo4, this.parrafo5, this.parrafo6];
algo:ElementRef=this.parrafo1;
  constructor() { }

  ngOnInit() {
  this.actual="algo";

    $(window).scroll(function(){
      if ($(window).scrollTop()>55.9) {
        $("#nav").addClass('fixed-top');
      } else {
        $("#nav").removeClass('fixed-top');
      }
    });


    }

  
  //this.parrafos[numero].nativeElement.scrollIntoView();
scrol(numero: number){
switch (numero) {
  case 0:
  window.scroll({ top: (this.parrafo1.nativeElement.offsetTop - 40), behavior: "smooth" });
  break;
  case 1:
      window.scroll({ top: (this.parrafo2.nativeElement.offsetTop - 40), behavior: "smooth" });
      break;
  case 2:
      window.scroll({ top: (this.parrafo3.nativeElement.offsetTop - 40), behavior: "smooth" });
      break;
  case 3:
      window.scroll({ top: (this.parrafo4.nativeElement.offsetTop - 40), behavior: "smooth" });
      break;
  case 4:
      window.scroll({ top: (this.parrafo5.nativeElement.offsetTop - 40), behavior: "smooth" });
      break;

  case 5:
      window.scroll({ top: 0, behavior: "smooth" });
    break;

  default:
    break;
}}




}
