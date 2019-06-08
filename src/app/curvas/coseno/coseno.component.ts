import { Component, OnInit, Input  } from '@angular/core';
import { Curva } from '../../models/Curva';

@Component({
  selector: 'app-coseno',
  templateUrl: './coseno.component.html',
  styleUrls: ['./coseno.component.css']
})
export class CosenoComponent extends Curva implements OnInit {
  @Input()
  ancho: number;
  @Input()
  largo: number;

  constructor() { 
    super();
  }

  ngOnInit() {
    this.psudoContructor(3,1);
    this.curva=`M ${this.mapeaOrigenX(this.escalr(this.tiempo))} ${this.calculaYP()}`;
    this.cx=this.origenx;
    this.cy=this.origeny;
    this.radio=this.scala;
    this.borde="black";
    this.sancho=1;
  }

  escalr(numero){
    return numero*this.scala;
  }
  mapeaOrigenX(numero){
    return numero+this.origenx;
  }

  calculaX()  {
    return this.cx=this.mapeaOrigenX(this.escalr(Math.sin(this.tiempo))+this.escalr(this.tiempo));
  }
  calculaYP(){
    return -(this.escalr((Math.cos(this.tiempo))))+this.origeny;
  }

  calculaRecta(){
    return `M ${this.cx} ${this.cy} L ${this.mapeaOrigenX(this.escalr(this.tiempo))} ${this.calculaYP()}`;
  }

  cambio(){
    this.cx=this.calculaX();
    this.curva+=`L ${this.mapeaOrigenX(this.escalr(this.tiempo))} ${this.calculaYP()}`;

  }

}
