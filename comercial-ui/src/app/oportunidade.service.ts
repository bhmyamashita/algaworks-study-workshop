import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiURL = 'http://192.168.0.104:8080/oportunidades';

  constructor(private httpClient:HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiURL);
  }

  adicionar(oportunidade: any) {
    return this.httpClient.post(this.apiURL, oportunidade);
  }
}
