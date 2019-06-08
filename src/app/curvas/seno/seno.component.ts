import { Component, OnInit, Input  } from '@angular/core';
import { Curva } from '../../models/Curva';

@Component({
  selector: 'app-seno',
  templateUrl: './seno.component.html',
  styleUrls: ['./seno.component.css']
})
export class SenoComponent extends Curva implements OnInit {
  @Input()
  ancho: number;
  @Input()
  largo: number;
  constructor() { 
    super();
  }

  ngOnInit() {
    this.psudoContructor(3,1);
    this.curva=`M ${this.origenx} ${this.origeny}`;
    this.cx=this.calculaX();
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
    return this.cx=this.mapeaOrigenX(this.escalr(Math.cos(this.tiempo))+this.escalr(this.tiempo));
  }
  calculaYP(){
    return -(this.escalr((Math.sin(this.tiempo))))+this.origeny;
  }

  calculaRecta(){
    return `M ${this.cx} ${this.cy} L ${this.mapeaOrigenX(this.escalr(this.tiempo))} ${this.calculaYP()}`;
  }

  cambio(){
    this.cx=this.calculaX();
    this.curva+=`L ${this.mapeaOrigenX(this.escalr(this.tiempo))} ${this.calculaYP()}`;

  }
}
