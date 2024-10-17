import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NotesPage } from './notes.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { ItemNoteComponent } from './item-note/item-note.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoNotesComponent } from './no-notes/no-notes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    NotesPage,
    ListNotesComponent,
    ItemNoteComponent,
    NoNotesComponent,
  ],
  exports: [ListNotesComponent, ItemNoteComponent, NoNotesComponent],
})
export class NotesPageModule {}
