import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [],
  imports: [
    ClarityModule,
    ReactiveFormsModule
  ],
  exports:[ClarityModule,ReactiveFormsModule]
})
export class SharedModule { }
