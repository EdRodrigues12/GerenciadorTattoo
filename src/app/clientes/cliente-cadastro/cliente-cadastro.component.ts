import { TattooService } from './../../imgsTattoo/tattoo.service';
import { AgendaService } from './../../agendas/agenda.service';
import { ClienteService } from './../cliente.service';
import { Cliente, Horario, Tattoo } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})


export class ClienteCadastroComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private agendaService: AgendaService,
    private toasty: ToastyService,
    private tattooService: TattooService,
    private errorHandler: ErrorHandlerService
  ) { }

  cliente = new Cliente();
  agendaMarcada = new Horario();
  tattoos = [];
  horas = [];

  foods: Food[] = [
    {value: '1', viewValue: '10:00'},
    {value: '2', viewValue: '11:00'},
    {value: '3', viewValue: '12:00'}
  ];

  ngOnInit() {
    this.carregarHoras();
    this.carregarTattoos();
  }

  salvarC(form: FormControl) {

    this.clienteService.adicionar(this.cliente)
      .then(() => {
        this.toasty.success('Lançamento adicionado com sucesso!');

        form.reset();
        this.cliente = new Cliente();
        this.agendaMarcada = new Horario();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    this.agendaService.adicionar(this.agendaMarcada)
      .catch(erro => this.errorHandler.handle(erro));
      this.salvarC(form);
  }

  carregarHoras() {
    return this.clienteService.listarTodasAgendas()
    .then(horas => {
      this.horas = horas.map(h => ({ viewValue: h.horas, value: h.id}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarTattoos() {
    return this.tattooService.listarTattoos()
    .then(tattoos => {
      this.tattoos = tattoos.map(t => ({viewValue: t.imagemTattoo, value: t.id}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }
}
