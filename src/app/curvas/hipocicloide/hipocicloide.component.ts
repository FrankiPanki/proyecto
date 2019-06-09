import { Component, OnInit, Input } from '@angular/core';
import { Curva } from '../../models/Curva';


@Component({
  selector: 'app-hipocicloide',
  templateUrl: './hipocicloide.component.html',
  styleUrls: ['./hipocicloide.component.css']
})
export class HipocicloideComponent extends Curva implements OnInit {

  @Input()
  ancho: number;
  @Input()
  largo: number;

  constructor() { 
    super();

  }

  ngOnInit() {
    this.psudoContructor(4,1);

        //circulo2 (directriz)
        this.cx2 = this.origenx;
        this.cy2 = this.origeny;
        this.radio2 = (this.scala) * this.radioV1;
        this.borde2 = "blue";
        this.sancho2 = 1;
    
        //circulo 2
        this.borde = "black";
        this.sancho = 1;
        this.radio = (this.scala) * this.radioV2;
        this.cx = this.calculaX()
        this.cy = this.calculaY()
    
        //curva
        this.curva=`M ${this.calculaXP()} ${this.calculaYP()}`;
  }
  cambio() {
     this.cx = this.calculaX();
     this.cy = this.calculaY();
    this.curva+=`L ${this.calculaXP()} ${this.calculaYP()}`;


  }


  cambioControlmas(){
    this.pilaCurva.push(this.curva.length)
    this.cx = this.calculaX()
    this.cy = this.calculaY()
     this.curva+=`L ${this.calculaXP()} ${this.calculaYP()}`;
  }

  cambioControlmenos(){
    this.curva=this.curva.substring(0,this.pilaCurva.pop());
    this.cx = this.calculaX();
    this.cy = this.calculaY();
  }

  calculaRecta() {
    return `M ${this.cx} ${this.cy} L ${this.calculaXP()} ${this.calculaYP()}`;
  }
  calculaYP() {
    return ((this.radio2 - this.radio)*Math.cos(this.tiempo))-((this.radio)*Math.cos(((this.radio-this.radio2)/(this.radio))*(this.tiempo)))+this.origeny;

  }
  calculaXP() {
    return ((this.radio2 - this.radio)*Math.sin(this.tiempo))-((this.radio)*Math.sin(((this.radio-this.radio2)/(this.radio))*(this.tiempo)))+this.origenx;
  }

  calculaX(){
    return ((this.radio2 - this.radio) * Math.sin(this.tiempo)) + this.origenx;
  }

  calculaY(){
    return ((this.radio2 - this.radio) * Math.cos(this.tiempo)) + this.origeny;
  }

}
