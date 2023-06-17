import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})

export class ContactanosComponent {

  title = 'Proyecto';
  mensajeEnviado: boolean = false;

  forma!: FormGroup;

  constructor(public _MessageService: MessageService) {}

  contactForm(formulario: any) {
    this._MessageService.sendMessage(formulario).subscribe(() => {
      this.mensajeEnviado = true;
    });
  }

}
