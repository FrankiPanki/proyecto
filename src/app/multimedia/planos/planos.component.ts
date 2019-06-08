import { Component, OnInit, ContentChild, Input, AfterViewInit } from '@angular/core';
import { Curva } from 'src/app/models/Curva';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit{

  @ContentChild('curva') curva: Curva;
  

  @Input()
  ancho: number;
  @Input()
  largo: number;
  @Input()
  opcion: String;
  @Input()
  r2: String;


  flatAncho:String;
  flatLargo:String;
  origenx: number;
  scala: number;
  origeny: number;
  ejex: string;
  ejey: string;
  masc;
  menosc;
  rmasc;
  rmenosc;
  rvmenosc;
  rvmasc;




  constructor() { }

  ngOnInit() {
    this.flatAncho=`${this.ancho}px`;
    this.flatLargo=`${this.largo}px`;

    this.ejex=`M 0 ${this.largo / 2} l ${this.ancho} 0` ;
    this.ejey=`M ${this.ancho / 2} 0 l 0 ${this.largo}` ;

    // this.curva.ancho=this.ancho;
    // this.curva.largo=this.largo;

  }



 
  //aqca empieza




  parar() {
    this.curva.para();


  }

  iniciar(){
    this.curva.inicia();
  }

  menos(){
    this.curva.menos();
    this.menosc=requestAnimationFrame(()=>this.menos());
  }

  pmenos(){
    cancelAnimationFrame(this.menosc);
  }



  mas(){
    this.curva.mas();
    this.masc=requestAnimationFrame(()=>this.mas());
  }

  pmas(){
    cancelAnimationFrame(this.masc);
  }

  rmenos(){
    this.curva.rmenos();
    this.rmenosc=requestAnimationFrame(()=>this.rmenos());
  }

  rpmenos(){
    cancelAnimationFrame(this.rmenosc);
  }



  rmas(){
    this.curva.rmas();
    this.rmasc=requestAnimationFrame(()=>this.rmas());
  }

  rpmas(){
    cancelAnimationFrame(this.rmasc);
  }

  


  rvmenos(){
    this.curva.rvmenos();
    this.rvmenosc=requestAnimationFrame(()=>this.rvmenos());
  }

  rvpmenos(){
    cancelAnimationFrame(this.rvmenosc);
  }



  rvmas(){
    this.curva.rvmas();
    this.rvmasc=requestAnimationFrame(()=>this.rvmas());
  }

  rvpmas(){
    cancelAnimationFrame(this.rvmasc);
  }


  
}


