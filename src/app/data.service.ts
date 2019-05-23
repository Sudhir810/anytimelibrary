import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Book } from './models/book.model';
import { BookService } from './books/book.service';
import { AuthService } from './auth/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class DataService{

  borrowedBooks: Book[] = [];
  books: Book[] = [];
  constructor(private http: Http,private bookService: BookService,private authService: AuthService) {}

  storeBooks(books: any[]){
    return this.http.post('https://library-4cfb9.firebaseio.com/books/-LRMLScgTPMsiphiboQR.json', books);
  }

  getBooks(){
    this.http.get('https://library-4cfb9.firebaseio.com/books/-LRMLScgTPMsiphiboQR.json')
      .subscribe(
        (response: Response) => {
          var data: Book[] = response.json();
          if(this.authService.isAuthenticated()){
            this.getBorrowedBooks().then(
              (book) => {
                if(book != null){
                  this.borrowedBooks = book;
                  for (var i = 0, len = this.borrowedBooks.length; i < len; i++) {
                    for (var j = 0, len2 = data.length; j < len2; j++) {
                      if (this.borrowedBooks[i].author === data[j].author) {
                        data.splice(j, 1);
                        len2=data.length;
                      }
                    }
                  }
                  this.bookService.setBooks(data);
                }
            });
          }
          this.bookService.setBooks(data);
      });
  }

  addtoBorrowList(book: Book[]){
    var userId = this.authService.currentUser();

    this.getBorrowedBooks().then(
      (data: Book[]) =>{
        if(data != null){
          data.push(book[0])
          firebase.database().ref().child("borrowlist2").child(userId)
            .set({book: data, email: this.authService.getEmail()}).then(
              (response) => alert("Book added to borrowlist successfully!!")
            )
        }else{
          firebase.database().ref().child("borrowlist2").child(userId)
            .set({book: book, email: this.authService.getEmail()}).then(
              (response) => alert("Book added to borrowlist successfully!!")
            )
        }
      }
    )
  }

  getBorrowedBooks(){
    var book: Book[] = [];
    var userId = this.authService.currentUser();
    return firebase.database().ref().child("borrowlist2").child(userId).once('value').then(function(snapshot) {
      if(snapshot.val() != null){
        book = snapshot.val().book
        return book;
      }
    })
  }

  removeFromBorrowList(removeBook: Book){
    var userId = this.authService.currentUser();
    var borrowedBooks: Book[] = [];
    this.getBorrowedBooks().then(
      (book: Book[]) => {
        borrowedBooks = book;
        for(var i = 0;i< borrowedBooks.length;i++){
          if(borrowedBooks[i].bookId == removeBook.bookId){
            borrowedBooks.splice(i,1)
            break;
          }
        }
        if(confirm("Are you sure you want to return? You can borrow again from the gallery if you change your mind..!!")){
          firebase.database().ref().child("borrowlist2").child(userId)
            .set({book: borrowedBooks, email: this.authService.getEmail()}).then(
              (response) => alert("Book removed from borrowlist successfully!!")
            )
        }
      }
    )
  }

  booksFromDifferentUsers(){
    return firebase.database().ref('/borrowlist2');
  }

}
