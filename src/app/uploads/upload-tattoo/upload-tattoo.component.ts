import { Tattoo } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { ToastyService } from 'ng2-toasty';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-upload-tattoo',
  templateUrl: './upload-tattoo.component.html',
  styleUrls: ['./upload-tattoo.component.css']
})
export class UploadTattooComponent implements OnInit {

  imageUrl = '/assets/img/default-image.png';
  fileToUpload: File = null;
  constructor(private imageService: UploadService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService) { }

  tattoo = new Tattoo();
  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };

    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption, Image) {
    this.salvar();
   this.imageService.postFile(Caption.value, this.fileToUpload).subscribe(
     data => {
       console.log('done');
       Caption.value = null;
       Image.value = null;
       this.imageUrl = '/assets/img/default-image.png';
     }
   );
  }

  salvar() {
    this.tattoo.caminhoTatuagem = this.fileToUpload.name;
    this.imageService.adicionar(this.tattoo)
      .then(() => {
        this.toasty.success('Tattoo adicionada com sucesso!');
/*
        form.reset();
        this.tattoo = new Tattoo(); */
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
