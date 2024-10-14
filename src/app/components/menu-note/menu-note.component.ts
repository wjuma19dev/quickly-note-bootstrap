import { Component, Input, inject } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";
import { NoteService } from "src/app/pages/notes/note.service";

@Component({
  selector: "app-menu-note",
  templateUrl: "./menu-note.component.html",
  styleUrls: ["./menu-note.component.scss"],
})
export class MenuNoteComponent {
  private _modalCtrl: ModalController = inject(ModalController);
  private _popoverCtrl: PopoverController = inject(PopoverController);
  private _notaService: NoteService = inject(NoteService);
  @Input() noteId!: string;
  eliminarNota() {
    this._notaService.eliminar(this.noteId);
    this._popoverCtrl.dismiss();
    this._modalCtrl.dismiss();
  }
}
