import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { DataService } from '../../../data.service';
import { UsersBooks } from '../../../models/UsersBooks';

@Component({
  selector: 'app-usersbook',
  templateUrl: './usersbook.component.html',
  styleUrls: ['./usersbook.component.css']
})
export class UsersbookComponent implements OnInit {

  constructor(private dataService: DataService) { }
  books = [];

  ngOnInit() {
    this.dataService.booksFromDifferentUsers().on('value', (snapshot) => {
      var returnArr = [];
      snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      this.books = returnArr;
      console.log(this.books[0].book);
    });
  }
}
