import { UploadsModule } from './uploads/uploads.module';
import { UploadTattooComponent } from './uploads/upload-tattoo/upload-tattoo.component';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ClienteService } from './clientes/cliente.service';
import { ClientePesquisaComponent } from './clientes/cliente-pesquisa/cliente-pesquisa.component';
import { ClientesModule } from './clientes/clientes.module';
import { ClienteCadastroComponent } from './clientes/cliente-cadastro/cliente-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule, MatToolbarModule, MatListModule} from '@angular/material';
import { MatOptionModule, MatGridListModule, MatCardModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { TattooComponenetComponent } from './imgsTattoo/tattoo-componenet/tattoo-componenet.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt, 'pt-BR');
const routes: Routes = [
  { path: 'clientes', component: ClienteCadastroComponent },
  { path: 'uploadTattoo', component: UploadTattooComponent },
  { path: 'clientesPesquisa', component: ClientePesquisaComponent },
  { path: 'catalogoTattoo', component: TattooComponenetComponent },
  { path: '', component: HomeComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    TattooComponenetComponent,
  ],
  imports: [
    HttpModule,
    CdkTableModule,
    CdkTreeModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatOptionModule,
    RouterModule.forRoot(routes),
    ToastyModule.forRoot(),
    ClientesModule,
    UploadsModule
  ],
  exports: [
    ToastyModule,
    MatFormFieldModule
  ],
  providers: [ClienteService,
    ErrorHandlerService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
