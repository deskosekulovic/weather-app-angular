import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "weather-app-angular";

  public city: string = "";
  public data = [];

  constructor(private http: HttpClient) {}

  onChange(e) {
    this.city = e.target.value;
    console.log(e.target.value);
    console.log(e);

    if (e.keyCode === 13 || e.keyCode === 188) {
      this.city = e.target.value.trim().replace(",", "").toLowerCase();
      const url = `https://api.openweathermap.org/data/2.5/weather?appid=c3b8f2e28ea9bf6f5d8bcb678001ab74&units=metric&q=${this.city}`;

      if (!this.city.length) return;
      this.http
        .get<any>(url)
        .pipe(
          map((data) => {
            return {
              temp: data.main.temp,
              weather: data.weather[0].main,
              humidity: data.main.humidity,
              wind: data.wind.speed,
              name: data.name,
            };
          })
        )
        .subscribe((data) => this.data.push(data));
      this.city = "";
    }
  }
}
