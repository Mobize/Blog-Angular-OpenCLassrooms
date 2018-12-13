import { Component } from '@angular/core';
import * as firebase from 'firebase/app'; // a verifier sans le /app

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyDoU7RUzZ5Dhpqif4fmQF8jdQlzeiJCcjw',
      authDomain: 'blog-firebase-openclassroom.firebaseapp.com',
      databaseURL: 'https://blog-firebase-openclassroom.firebaseio.com',
      projectId: 'blog-firebase-openclassroom',
      storageBucket: 'blog-firebase-openclassroom.appspot.com',
      messagingSenderId: '619889547872'
    };
    firebase.initializeApp(config);
  }
}
