import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Cliente, Horario } from './../core/model';

import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientessUrl = 'http://localhost:8080/clientes';
  agendaUrl = 'http://localhost:8080/clientes/horarios';
  constructor(private http: Http) { }

  adicionar(cliente: Cliente): Promise<Cliente> {
    const headers = new Headers();
   /*  headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.clientessUrl,
        JSON.stringify(cliente) , { headers } )
      .toPromise()
      .then(response => response.json());
  }

  listarTodasAgendas(): Promise<any> {
    const headers = new Headers();
    /*  headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    return this.http.get(this.agendaUrl/* , { headers } */)
      .toPromise()
      .then(response => response.json());
  }
}
