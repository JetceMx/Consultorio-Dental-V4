import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
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

  sidebarOpen = false;
  isTextModified = false;
  isColorModified = false;

  tiles: Tile[] = [
    {text: 'Mejorar la salud bucal de la población', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Hacer que la poblacion se siente conforme con su sonrisa', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Prevenir enfermedades y complicaciones en el futuro', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Mejorar la calidad de vida de las personas', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  hidden = false;
  message: string = "Card de html Oswaldo Cruz Sarmientos  Dentista general Fotografia de Oswaldo Cruz Sarmientos con una amiga  Es el doctor que diagnostica y trata enfermedades de la boca. Es un profesional de la salud licenciado que puede tener el grado de Doctor en Medicina Dental (DMD) o Doctor en Cirugía oral (DDS). Card de Html Juan Manuel Gonzales Alaniz Odontopediatra Fotografia de Juan Manuel Gonzales AlanizAtiende y trata las distintas enfermedades bucodentales desde la infancia más temprana hasta finalizar el crecimiento. Card de Html Juan Sebastian Teran Ramirez Ortodoncista Fotografia de Juan Sebastian Teran Ramirez Con alta capacitación especial en prevención, diagnóstico y tratamiento de ciertos problemas de los dientes y la mandíbula, tales como dientes desalineados o apiñados, o mal oclusión (mordida). Card de Html Jose Esau Tovar Cruz Endodoncista Fotografia de Jose Esau Tovar Cruz Se especializa en el mantenimiento de los dientes a través de la terapia endodóntica, procedimientos que involucran el tratamiento del tejido interno blando de los dientes, llamado pulpa !Principales Objetivos de nuestro consultorio! Tabla de angular material, renglon uno columnas dos y tres: Mejorar la salud bucal de la población, volumnan tres renglones uno y dos: Hacer que la poblacion se siente conforme con su sonrisa renglon dos columna uno Prevenir enfermedades y complicaciones en el futuro, renglon dos columna dos Mejorar la calidad de vida de las personas Fin del contenido de la pagina";
  speechUtterance: SpeechSynthesisUtterance;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.speechUtterance = new SpeechSynthesisUtterance();
   }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  increaseTextSize() {
    this.changeTextSize('1.2');
  }

  decreaseTextSize() {
    this.changeTextSize('0.8');
  }

  private changeTextSize(scale: string) {
    const elements = this.elementRef.nativeElement.querySelectorAll('*');

    elements.forEach((element: any) => {
      const currentFontSize = parseFloat(getComputedStyle(element).fontSize);
      const newFontSize = currentFontSize * parseFloat(scale);

      this.renderer.setStyle(element, 'fontSize', `${newFontSize}px`);
    });
  }

  toggleTextSettings() {
    if (this.isTextModified) {
      this.resetTextSettings();
    } else {
      this.applyTextSettings();
    }

    this.isTextModified = !this.isTextModified;
  }

  private applyTextSettings() {
    document.body.style.fontFamily = 'Arial';
    document.body.style.fontSize = '16px';
    document.body.style.letterSpacing = '3.5px';
    document.body.style.wordSpacing = '0.5em';
    document.body.style.textTransform = 'lowercase';
  }

  private resetTextSettings() {
    document.body.style.fontFamily = '';
    document.body.style.fontSize = '';
    document.body.style.letterSpacing = '';
    document.body.style.wordSpacing = '';
    document.body.style.textTransform = '';
  }

  toggleColor() {
    if (this.isColorModified) {
      this.resetColor();
    } else {
      this.applyColor();
    }

    this.isColorModified = !this.isColorModified;
  }

  private applyColor() {
    document.body.style.backgroundColor = 'black';
    const cardElement = document.getElementById("card");
    const cardElement2 = document.getElementById("card2");
    const cardElement3 = document.getElementById("card3");
    const cardElement4 = document.getElementById("card4");

    if (cardElement) {
      cardElement.style.backgroundColor = '#BD8E00';
      cardElement.style.color = '#000481';
    }

    if (cardElement2) {
      cardElement2.style.backgroundColor = '#BD8E00';
      cardElement2.style.color = '#000481';
    }

    if (cardElement3) {
      cardElement3.style.backgroundColor = '#BD8E00';
      cardElement3.style.color = '#000481';
    }

    if (cardElement4) {
      cardElement4.style.backgroundColor = '#BD8E00';
      cardElement4.style.color = '#000481';
    }

  }

  private resetColor() {
    document.body.style.backgroundColor = '';
    const cardElement = document.getElementById("card");
    const cardElement2 = document.getElementById("card2");
    const cardElement3 = document.getElementById("card3");
    const cardElement4 = document.getElementById("card4");

    if (cardElement) {
      cardElement.style.backgroundColor = '';
      cardElement.style.color = '';
    }

    if (cardElement2) {
      cardElement2.style.backgroundColor = '';
      cardElement2.style.color = '';
    }

    if (cardElement3) {
      cardElement3.style.backgroundColor = '';
      cardElement3.style.color = '';
    }

    if (cardElement4) {
      cardElement4.style.backgroundColor = '';
      cardElement4.style.color = '';
    }

  }

  speak() {
    this.speechUtterance.text = this.message;
    this.speechUtterance.onend = () => {
      // Aquí detienes el Text-to-Speech
      window.speechSynthesis.cancel();
    };
    window.speechSynthesis.speak(this.speechUtterance);
  }

  pause() {
    window.speechSynthesis.pause();
  }

  resume() {
    window.speechSynthesis.resume();
  }

}
