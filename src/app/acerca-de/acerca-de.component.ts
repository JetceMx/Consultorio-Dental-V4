import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

  tiles: Tile[] = [
    {text: 'Mejorar la salud bucal de la población', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Hacer que la poblacion se siente conforme con su sonrisa', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Prevenir enfermedades y complicaciones en el futuro', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Mejorar la calidad de vida de las personas', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
