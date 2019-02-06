import { TattooService } from './../tattoo.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-tattoo-componenet',
  templateUrl: './tattoo-componenet.component.html',
  styleUrls: ['./tattoo-componenet.component.css']
})
export class TattooComponenetComponent implements OnInit {

  constructor(
    private tattooService: TattooService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService) { }

  src = [];

  ngOnInit() {
    this.carregarTattoos();
  }

  carregarTattoos() {
    return this.tattooService.listarTattoo()
    .then(src => {
      this.src = src.map(s => ({ viewValue: s}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

}
