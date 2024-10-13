import { Component, inject } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NewNoteComponent } from "src/app/pages/notes/new-note/new-note.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
})
export class TabsComponent {
  modalCtrl: ModalController = inject(ModalController);

  async nuevaNota() {
    const modal = await this.modalCtrl.create({
      component: NewNoteComponent,
    });
    await modal.present();
  }
}
