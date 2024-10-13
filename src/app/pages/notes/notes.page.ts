import { Component, OnInit, inject } from "@angular/core";
import { NoteService } from "./note.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.page.html",
  styleUrls: ["./notes.page.scss"],
})
export class NotesPage implements OnInit {
  notas = inject(NoteService).notas;

  constructor() {}

  ngOnInit() {}
}
