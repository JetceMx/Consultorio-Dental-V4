import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private _http: HttpClient) { }
  sendMessage(body: any) {
    return this._http.post('https://backend-consultorio.onrender.com/contacto', body);
  }
}
