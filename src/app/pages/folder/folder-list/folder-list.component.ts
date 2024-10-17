import { Component, input, ViewChild } from '@angular/core';
import { IFolder } from '../folder.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss'],
})
export class FolderListComponent {
  folders = input.required<IFolder[]>();
  @ViewChild(IonList) ionList!: IonList;

  cerrarListSliding() {
    this.ionList.closeSlidingItems();
  }
}
