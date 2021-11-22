import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  exports: [
    LoadingComponent,
    CommonModule,
    ClarityModule
  ]

})
export class CoreModule { }
