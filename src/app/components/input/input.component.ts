import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  public city = "";
  constructor() {}

  ngOnInit(): void {}

  onChange(e, searchCity) {
    if (e.keyCode === 13 || e.keyCode === 188) {
      this.city = searchCity
        .trim()
        .replace(",", "")
        .toLowerCase();
      const url = `https://api.openweathermap.org/data/2.5/weather?appid=c3b8f2e28ea9bf6f5d8bcb678001ab74&units=metric&q=${this.city}`;
    }
  }
}
