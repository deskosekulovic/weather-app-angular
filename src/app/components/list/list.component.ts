import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.data);

    // this.data = "Clicked!!!";
    // this.cities.push("test");
  }
}
