import { Tattoo } from './../core/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, URLSearchParams } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient, private http2: Http) { }

  urlTattoo = 'http://localhost:8080/tatuagens';

  adicionar(tattoo: Tattoo): Promise<Tattoo> {
    const headers = new Headers();
   /*  headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');*/
    headers.append('Content-Type', 'application/json');

    return this.http2.post(this.urlTattoo,
        JSON.stringify(tattoo) , { headers } )
      .toPromise()
      .then(response => response.json());
  }

  postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://localhost:8080/upload/uploadFile';
    const formData: FormData = new FormData();
    /* formData.append('Image', fileToUpload, fileToUpload.name); */
    formData.append('file', fileToUpload);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  }
}
