import { Component, OnInit, Input } from '@angular/core';
import { Curva } from '../../models/Curva';
@Component({
  selector: 'app-cicloide',
  templateUrl: './cicloide.component.html',
  styleUrls: ['./cicloide.component.css']
})
export class CicloideComponent extends Curva implements OnInit  {
  //export class CicloideComponent  implements OnInit {

    @Input()
    ancho: number;
    @Input()
    largo: number;


  constructor() {
    super();
  }
  // ngOnInit(){}


  ngOnInit() {
    this.psudoContructor(3,1);
    this.radio=this.scala * this.radioV2;
    this.cx=this.calculaX();

    this.cy=this.calculaY();
    this.borde="black";
    this.sancho=1;
    this.curva=`M ${this.calculaXP()} ${this.calculaYP()}`;
  }

  cambio() {  
    this.curva+=`L ${this.calculaXP()} ${this.calculaYP()}`;
    this.cx=this.calculaX();
  }

  cambioControlmas(){
    this.pilaCurva.push(this.curva.length)
    this.curva+=`L ${this.calculaXP()} ${this.calculaYP()}`;
    this.cx=this.calculaX();
  }

  cambioControlmenos(){
    this.curva=this.curva.substring(0,this.pilaCurva.pop());
    this.cx=this.calculaX();
  }


 

  calculaYP(){
    return -(this.radio*(1-Math.cos(this.tiempo)))+this.origeny;
  }
  calculaXP(){
    return this.radio*(this.tiempo-Math.sin(this.tiempo))+this.origenx;
  }

  calculaRecta(){
    return `M ${this.calculaX()} ${this.calculaY()} L ${this.calculaXP()} ${this.calculaYP()}`;
  }

  calculaX()  {
    return this.cx=(this.tiempo*this.radio)+this.origenx;
  }
  calculaY()  {
    return this.cy=-this.radio+this.origeny;
  }

 


}
