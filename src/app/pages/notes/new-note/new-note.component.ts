import { Component, ViewChild, inject } from "@angular/core";
import { Nota } from "../note.model";
import { IonInput, ModalController, ToastController } from "@ionic/angular";
import { NoteService } from "../note.service";

@Component({
  selector: "app-new-note",
  templateUrl: "./new-note.component.html",
  styleUrls: ["./new-note.component.scss"],
})
export class NewNoteComponent {
  notaService: NoteService = inject(NoteService);
  toastCtrl: ToastController = inject(ToastController);
  modalCtrl: ModalController = inject(ModalController);

  @ViewChild(IonInput) ionInput!: IonInput;

  notaObj = {
    titulo: "",
    contenido: "",
    creado: new Date(),
  };

  async guardar() {
    if (
      this.notaObj.titulo.trim() === "" ||
      this.notaObj.contenido.trim() === ""
    ) {
      this.ionInput.setFocus();
      this.presentToas(
        "alert-danger",
        "bottom",
        "Todos los campos son obligatorios",
      );
      return;
    }

    const nota = new Nota(
      this.notaObj.titulo,
      this.notaObj.contenido,
      this.notaObj.creado,
    );
    this.notaService.agregar(nota);
    this.presentToas("alert-success", "bottom", "Nota creada correctamente");
  }

  async presentToas(
    color: string,
    position: "top" | "middle" | "bottom",
    message: string,
  ) {
    const toas = this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      mode: "ios",
      position,
    });
    (await toas).present();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
