import { Component, OnInit, input } from "@angular/core";
import { INota } from "../note.interface";

@Component({
  selector: "app-item-note",
  templateUrl: "./item-note.component.html",
  styleUrls: ["./item-note.component.scss"],
})
export class ItemNoteComponent implements OnInit {
  nota = input.required<INota>();

  constructor() {}

  ngOnInit() {}
}
