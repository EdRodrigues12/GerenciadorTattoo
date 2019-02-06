import { Http, Headers } from '@angular/http';
import { Horario } from './../core/model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  agendaUrl = 'http://localhost:8080/clientes/agenda';
  constructor(private http: Http) { }

  adicionar(agenda: Horario): Promise<Horario> {
    const headers = new Headers();
   /*  headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.agendaUrl,
        JSON.stringify(agenda) , { headers } )
      .toPromise()
      .then(response => response.json());
  }
}
