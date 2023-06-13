import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hijo',
  template: `
    <div class="gohanComp" style="justify-content: center; text-align: center;">
      <p> !!Canjea Tu Cupon y {{Entrada}} <p> 
      <button 
        type="button" 
        (click)="Alerta(true)" class="btn btn-outline-info"
      >!Cupon!</button>
    </div>
  `,
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() Entrada: string | undefined;
  @Output() Salida = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  Alerta(msg: boolean){
    this.Salida.emit(msg)
    console.log(msg);
  }

}