import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  parametro:string=""
  constructor(private router: ActivatedRoute){}

ngOnInit(): void {
     this.router.queryParams.subscribe(params => {
      this.parametro= params['parametro'];
     });
     console.log("recibido")
     console.log(this.parametro)
 }
}
