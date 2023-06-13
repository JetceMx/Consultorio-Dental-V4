import { Component } from '@angular/core';

@Component({
  selector: 'padre ',
  template: `
  
  <h2 style="justify-content: center; text-align: center;">¿Buscas Ofertas Especiales?</h2>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <hijo
            [Entrada]="HerenciaPadre" 
            (Salida)="Lista($event)">
          </hijo>
          <h3 style="justify-content: center; text-align: center;"></h3>
          <img style="justify-content: center; text-align: center;" src="{{Img}}" alt="">
        </div>
      </div>
    </div>
    
  `,
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  Bandera: boolean = false;
  Img: string | undefined;
  HerenciaPadre: string = "No te pierdas de las grandes ofertas especiales que tenemos para ti !!"

  constructor() { }

  Lista(confirmation: boolean){
    this.Bandera = confirmation;
    console.log(this.Bandera);

    //hacer genkidama si es true
    if(this.Bandera){
      this.Img = 'https://cdn-icons-png.flaticon.com/512/2331/2331729.png?size=200px'
    }
  }

}