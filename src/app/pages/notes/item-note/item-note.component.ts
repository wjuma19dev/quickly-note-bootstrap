import { Component, OnInit, inject, input } from "@angular/core";
import { INota } from "../note.interface";
import { ModalController } from "@ionic/angular";
import { NewNoteComponent } from "../new-note/new-note.component";

@Component({
  selector: "app-item-note",
  templateUrl: "./item-note.component.html",
  styleUrls: ["./item-note.component.scss"],
})
export class ItemNoteComponent implements OnInit {
  private _modalCtrl: ModalController = inject(ModalController);
  nota = input.required<INota>();

  constructor() {}

  ngOnInit() {}

  async editarNota() {
    const modal = await this._modalCtrl.create({
      component: NewNoteComponent,
      componentProps: { noteId: this.nota().id, editMode: true },
    });
    await modal.present();
  }
}
