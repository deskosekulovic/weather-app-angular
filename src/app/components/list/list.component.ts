import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  data = "";
  cities = ["London", "Novi Sad", "Vrbas"];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.data = "Clicked!!!";
    this.cities.push("test");
  }
}
