export class Curva {
    constructor() {

    }
    cx;
    cy;
    radio;
    borde;
    sancho;
    ancho;
    largo;
    scala;
    origenx;
    origeny;
    //dinamico
    radioV2;
    //estatico
    radioV1;
    
    cx2;
    cy2;
    radio2;
    borde2;
    sancho2;


    lastTime = Date.now();
    current = 0;
    elapsed = 0;
    max_elapsed_wait = 30 / 1000;
    counter_time = 0;
    time_step = 0.1;
    animacion;
    tiempo = 0;
    curva;
    pilaCurva=[];
    generatriz=0;
    base=0;
    showcurva=0;



    psudoContructor(v1, v2){
      this.origenx = this.ancho / 2;
      this.origeny = this.largo / 2;
      this.scala = this.largo / 12;
      this.radioV1=v1;
      this.radioV2=v2;
    }

    showGeneratriz(){
      if (this.generatriz==1) {
        console.log("entra--")
        $(".generatriz").show();
        this.generatriz=0;
        
      } else {
        $(".generatriz").hide();
        this.generatriz=1;
        
      }
    }
    showBase(){
      if (this.generatriz==1) {
        $(".base").show();
        this.generatriz=0;
        
      } else {
        $(".base").hide();
        this.generatriz=1;
        
      }
    }
    showCurva(){
      console.log("entra show");
      if (this.showcurva==1) {
        $(".curva").show();
        this.showcurva=0;
        
      } else {
        $(".curva").hide();
        this.showcurva=1;
        
      }
    }
  


    cambio() {
        console.log("hola cambio generico");
    }
    para(){
        this.animacion=cancelAnimationFrame(this.animacion);
      }
    inicia(): void {
        this.animacion=this.gameLoop();
    }

    cambioControlmas(){}
    cambioControlmenos(){}
    calculaX(){}
    calculaY(){}

    mas(){
      this.tiempo+=0.01;
      this.cambioControlmas();

    }

    menos(){

      this.tiempo-=0.01;
      this.cambioControlmenos();

    }

    rmenos(){
      this.radioV2-=0.01;
      this.radio=this.scala*this.radioV2;

    }
    rmas(){
      this.radioV2+=0.01;
      this.radio=this.scala*this.radioV2;
      this.calculaX();
      this.calculaY();

    }

    rvmenos(){
      this.radioV1-=0.01;
      this.radio2=this.scala*this.radioV1;
      this.calculaX();
      this.calculaY();
    }

    rvmas(){
      this.radioV1+=0.01;
      this.radio2=this.scala*this.radioV1;
      this.calculaX();
      this.calculaY();
    }


    gameLoop(){
        this.current = Date.now();
        this.elapsed = (this.current - this.lastTime) / 1000;
        if (this.elapsed > this.max_elapsed_wait) {
          this.elapsed = this.max_elapsed_wait;
        }
     
        this.tiempo=this.counter_time;

        this.cambio();
    
          this.counter_time += this.elapsed;
      
      
          this.lastTime = this.current;
    
          this.animacion=requestAnimationFrame(() => this.gameLoop());
          return this.animacion;
      }



}