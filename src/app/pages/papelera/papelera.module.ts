import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapeleraPageRoutingModule } from './papelera-routing.module';

import { PapeleraPage } from './papelera.page';
import { ComponentsModule } from '../../components/components.module';
import { NotesPageModule } from '../notes/notes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapeleraPageRoutingModule,
    ComponentsModule,
    NotesPageModule,
  ],
  declarations: [PapeleraPage],
})
export class PapeleraPageModule {}
