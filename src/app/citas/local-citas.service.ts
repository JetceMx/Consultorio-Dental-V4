import { Injectable } from '@angular/core';
import { citasInterface } from './local-citas.model';
import { Firestore,collection,addDoc, collectionData,doc,deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalCitasService {
  //private arrayCitas: citasInterface[];

  constructor(private firestore:Firestore) {
    //this.arrayCitas = JSON.parse(localStorage.getItem('data') || '[]');

  }

  /*getArrayCitas() {
    return this.arrayCitas;
  }

  mostrarHorasArrayCitas(): void {
    for (let cita of this.arrayCitas) {
      console.log(cita.hora);
    }
  }*/

  addregis(cita:citasInterface){
    const citaRef = collection(this.firestore,"citas");
    console.log(citaRef)
    return addDoc(citaRef,cita);
  }
  getregis():Observable<citasInterface[]>{
    const citaRef = collection(this.firestore,"citas");
    console.log(collection);
    return collectionData(citaRef,{idField: "id"})as Observable<citasInterface[]>;
  }
  deleteregis(cita:citasInterface){
    const citaDocRef = doc(this.firestore,`citas/${cita.id}`);
    return deleteDoc(citaDocRef);
  }
  /*agregarCita(cita: citasInterface) {
    this.arrayCitas.push(cita);
    localStorage.setItem('data', JSON.stringify(this.arrayCitas));
  }*/

  /*nuevaCita(): citasInterface {
    return {
      nombre: "",
      apellidos: "",
      edad: "",
      telefono: "",
      correo: "",
      fecha: "",
      hora: "",
    }
  }*/
}
