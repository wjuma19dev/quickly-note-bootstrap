import { Component, OnInit, input } from "@angular/core";
import { INota } from "../note.interface";

@Component({
  selector: "app-list-notes",
  templateUrl: "./list-notes.component.html",
  styleUrls: ["./list-notes.component.scss"],
})
export class ListNotesComponent implements OnInit {
  notas = input.required<INota[]>();

  constructor() {}

  ngOnInit() {}
}
