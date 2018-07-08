import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit() {
  }

    /**
   * gets the username of local storage
   */
  getUsername() {
    this.username = localStorage.getItem('username');
    return this.username;
  }

}
