import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteGridComponent } from './cliente-grid/cliente-grid.component';
import { ClientePesquisaComponent } from './cliente-pesquisa/cliente-pesquisa.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule, MatToolbarModule, MatListModule} from '@angular/material';
import { MatOptionModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatOptionModule
  ],
  declarations: [ClienteCadastroComponent, ClienteGridComponent, ClientePesquisaComponent]
})
export class ClientesModule { }
