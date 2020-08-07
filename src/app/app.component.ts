import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignments';
  public defaultCity: string;
  public userImage: string;
  public isDisabled: boolean;

  ngOnInit(): void {
    this.defaultCity = 'Kolkata';
    this.userImage = './assets/user.png';
    this.isDisabled = true;
  }

}
