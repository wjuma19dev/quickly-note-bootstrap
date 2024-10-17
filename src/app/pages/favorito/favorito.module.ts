import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritoPageRoutingModule } from './favorito-routing.module';

import { FavoritoPage } from './favorito.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NotesPageModule } from '../notes/notes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritoPageRoutingModule,
    ComponentsModule,
    NotesPageModule,
  ],
  declarations: [FavoritoPage],
})
export class FavoritoPageModule {}
