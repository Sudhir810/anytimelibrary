import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { BOOKS } from './Data/books-mock';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private dataService: DataService){}

  ngOnInit(){
    // this.dataService.storeBooks(BOOKS)
    //   .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   )
    firebase.initializeApp({
      apiKey: "AIzaSyCACx-qm2EhnPorui4R9LRjkhOL0OPYX1A",
      authDomain: "library-4cfb9.firebaseapp.com",
      databaseURL: "https://library-4cfb9.firebaseio.com"
    })

    // this.dataService.getBooks();
  }


}
