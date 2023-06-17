import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  searchTerm: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
    });
  }
  isOpen: number =0;

  preguntas = [
    { id: 1, title: '¿Cuentan con servicios gratuitos?', content: 'Lamentos informar que nuestros servicios ofrecidos No son Gratuitos y cada uno de ellos tiene un costo' },
    { id: 2, title: '¿Cual es la duracion de cada Consulta?', content: 'Cada consulta varia en tiempos ya que esto depende de lo que deba llevarse a cabo' },
    { id: 3, title: '¿Puedo tener un rembolso de mi dinero si no estoy satisfecho con mi trabajo?', content:'Lamentablemente no ofrecemos rembolsos de dinero, pero segun sea el problema podemos volver a realizar la cita sin ningun costo'},
    { id: 4, title: '¿Por que deberia de conciderarlos como una opcion?', content: 'Contamos con los mejores especialistas en el area de medicina por lo que insistimos en acudir a nuestro consulorio si tienes un problema dental.'},
    { id: 5, title: '¿Como puedo contactarlos?',content:'La forma mas facil de recibir respuesta es a nuestro correo: blog.isc22@gmail.com' }, 
    // Resto de preguntas...
  ];
  filterPreguntas(): any[] {
    if (!this.searchTerm) {
      return this.preguntas;
    }
    
    const searchTermLowerCase = this.searchTerm.toLowerCase();
    return this.preguntas.filter(pregunta => pregunta.title.toLowerCase().includes(searchTermLowerCase));
  }
}

