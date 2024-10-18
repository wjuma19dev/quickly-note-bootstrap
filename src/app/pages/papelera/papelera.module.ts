import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapeleraPageRoutingModule } from './papelera-routing.module';

import { PapeleraPage } from './papelera.page';
import { ComponentsModule } from '../../components/components.module';
import { NotesPageModule } from '../notes/notes.module';
import { NoNotesComponent } from '../notes/no-notes/no-notes.component';
import { papeleraFiltroPipe } from './filtro.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapeleraPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PapeleraPage, NoNotesComponent, papeleraFiltroPipe],
})
export class PapeleraPageModule {}
