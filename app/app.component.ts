import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
  message: string = "Hello Prosper!";

  users: User[] = [
    { id: 5, name: "Prosper", username: "unicodeveloper" },
    { id: 6, name: "Goodness", username: "coleslawson" },
    { id: 7, name: "Excellent", username: "otemz" },
  ]

  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }
}