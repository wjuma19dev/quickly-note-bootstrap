import { Component, inject } from "@angular/core";
import { NoteService } from "./pages/notes/note.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor() {
    inject(NoteService).inicializarNotas();
  }
}
