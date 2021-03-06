import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon API';
  subtitle = 'Open the console to view information about my favorite Pokemon';
  constructor(private _httpService: HttpService) {}
}
