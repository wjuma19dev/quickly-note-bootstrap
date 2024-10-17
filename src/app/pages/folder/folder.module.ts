import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ComponentsModule } from '../../components/components.module';
import { FolderListComponent } from './folder-list/folder-list.component';
import { FolderItemComponent } from './folder-item/folder-item.component';
import { FolderNewComponent } from './folder-new/folder-new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    FolderPage,
    FolderListComponent,
    FolderItemComponent,
    FolderNewComponent,
  ],
})
export class FolderPageModule {}
