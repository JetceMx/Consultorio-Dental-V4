import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CitaService {

  constructor(private _http: HttpClient) { }
  sendMessage(body: any) {
    return this._http.post('http://localhost:3000/citas/agendar', body);
  }

}
