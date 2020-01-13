import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeLine: boolean;

  ngOnInit() {
    this.welcomeLine = true;
  }

  constructor() { }

}
