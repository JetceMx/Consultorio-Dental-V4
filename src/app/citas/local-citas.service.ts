import { Injectable } from '@angular/core';
import { citasInterface } from './local-citas.model';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalCitasService {
  //private arrayCitas: citasInterface[];

  constructor(private firestore: Firestore) {
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

  addregis(cita: citasInterface) {
    const citaRef = collection(this.firestore, "CitasRyD");
    console.log(citaRef)
    return addDoc(citaRef, cita);
  }
  addregis2(cita: citasInterface) {
    const citaRef = collection(this.firestore, "CitasEsteticos");
    console.log(citaRef)
    return addDoc(citaRef, cita);
  }
  addregis3(cita: citasInterface) {
    const citaRef = collection(this.firestore, "CitasMedicos");
    console.log(citaRef)
    return addDoc(citaRef, cita);
  }
  addregis4(cita: citasInterface) {
    const citaRef = collection(this.firestore, "CitasLimpieza");
    console.log(citaRef)
    return addDoc(citaRef, cita);
  }
  addregis5(cita: citasInterface) {
    const citaRef = collection(this.firestore, "CitasUrgencias");
    console.log(citaRef)
    return addDoc(citaRef, cita);
  }

  getregisRyD(): Observable<citasInterface[]> {
    const citaRef = collection(this.firestore, "CitasRyD");
    console.log(collection);
    return collectionData(citaRef, { idField: "id" }) as Observable<citasInterface[]>;
  }

  getregisEst(): Observable<citasInterface[]> {
    const citaRef = collection(this.firestore, "CitasEsteticos");
    console.log(collection);
    return collectionData(citaRef, { idField: "id" }) as Observable<citasInterface[]>;
  }

  getregisMed(): Observable<citasInterface[]> {
    const citaRef = collection(this.firestore, "CitasMedicos");
    console.log(collection);
    return collectionData(citaRef, { idField: "id" }) as Observable<citasInterface[]>;
  }

  getregisLim(): Observable<citasInterface[]> {
    const citaRef = collection(this.firestore, "CitasLimpieza");
    console.log(collection);
    return collectionData(citaRef, { idField: "id" }) as Observable<citasInterface[]>;
  }

  getregisUrg(): Observable<citasInterface[]> {
    const citaRef = collection(this.firestore, "CitasUrgencias");
    console.log(collection);
    return collectionData(citaRef, { idField: "id" }) as Observable<citasInterface[]>;
  }

  deleteregis(cita: citasInterface) {
    const citaDocRef = doc(this.firestore, `citas/${cita.id}`);
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
