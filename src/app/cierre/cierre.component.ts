import { Component, OnInit,  ViewChild, ViewEncapsulation } from '@angular/core';
import { PlanosComponent } from '../multimedia/planos/planos.component';

@Component({
  selector: 'app-cierre',
  templateUrl: './cierre.component.html',
  styleUrls: ['./cierre.component.css']
})
export class CierreComponent implements OnInit {
  @ViewChild('plano') plano: PlanosComponent;
  choice="cicloide";
  constructor() { }

  ngOnInit() {
    $(".ojo").click(function(){
      if ($(this).attr('ojo')=="si") {
        $(this).css("background", "url('../../assets/info/ocultar.svg')");
        $(this).attr('ojo','no');
      } else {
        $(this).css("background", "url('../../assets/info/ver.svg')");
        $(this).attr('ojo','si');
      }

    });

  }

  ngAfterViewInit(){
    
    $("#ojo1").click(
      ()=> {this.plano.curva.showGeneratriz();
        this.choice
      }
    );
    $("#ojo2").click(
      ()=> {this.plano.curva.showBase();
      }
    );
    $("#ojo3").click(
      ()=> {this.plano.curva.showCurva();
      }
    );


  }


  cambio(i){
    console.log(this.choice);
    switch (i) {
      case 0:
        this.choice="cicloide";
        break;
      case 1:
        this.choice="epicicloide";
        break;
      case 2:
        this.choice="hipocicloide"
        break;
    }
  }


}
