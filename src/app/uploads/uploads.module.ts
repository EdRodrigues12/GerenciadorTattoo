import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadTattooComponent } from './upload-tattoo/upload-tattoo.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [UploadTattooComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class UploadsModule { }
