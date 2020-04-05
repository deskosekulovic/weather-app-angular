import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
  @Input() city: string;
  @Output() detectChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onChange(e) {
    this.detectChange.emit(e);
  }
}
