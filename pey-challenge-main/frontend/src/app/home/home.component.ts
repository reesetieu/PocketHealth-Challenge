import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = "";
  userId: string = "";
  colour: string = "";

  constructor(
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { name: string, userId: string, colour: string };

    if (state) {
      this.name = state.name;
      this.userId = state.userId;
      this.colour = state.colour;
    }

  }
  ngOnInit(): void {
      document.documentElement.style.setProperty('--user-background-color', this.colour);
  }


}
