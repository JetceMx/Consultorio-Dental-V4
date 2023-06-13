import { Component, OnInit } from '@angular/core';
import { citasInterface } from '../local-citas.model';
import { LocalCitasService } from '../local-citas.service';

@Component({
  selector: 'app-revisar',
  templateUrl: './revisar.component.html',
  styleUrls: ['./revisar.component.css']
})
export class RevisarComponent implements OnInit{
  cita:citasInterface[];
  filterPost = '';

  constructor(private citasService: LocalCitasService){
    this.cita=[{
      nombre: "Juan",
      apellidos: "Teran",
      edad: "20",
      telefono: "4444",
      correo: "13@gmail.com",
      fecha: "11-12-2023",
      hora: "14-23",
    }]

  }

  ngOnInit(){
    this.citasService.getregis().subscribe(cita =>{
      console.log(cita);
      this.cita=cita;
    })

    /*console.log(this.citasService.getArrayCitas())
    this.arrayCitas=this.citasService.getArrayCitas();
    console.log("revisar comp"+this.arrayCitas);*/
  }
  async onClickDelete(cita:citasInterface){
    const response = await this.citasService.deleteregis(cita);
    console.log(response);
    
  }

}


