import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class TattooService {
  tattooUrl = 'http://localhost:8080/upload/getallfiles';
  urlTattoo = 'http://localhost:8080/tatuagens/tatuagenslist';
  constructor(private http: Http) { }

  listarTattoo(): Promise<any> {
    const headers = new Headers();
    /*  headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    return this.http.get(this.tattooUrl/* , { headers } */)
      .toPromise()
      .then(response => response.json());
  }

  listarTattoos(): Promise<any> {
    const headers = new Headers();
    /*  headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/

    return this.http.get(this.urlTattoo/* , { headers } */)
      .toPromise()
      .then(response => response.json());
  }
}
