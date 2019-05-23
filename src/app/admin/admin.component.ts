import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { DataService } from '../data.service';
import { Book } from '../models/book.model';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  subscription: Subscription;
  id: number;
  editMode = false;
  newbookForm: FormGroup;
  books: Book[];
  index: number;

  constructor(private dataService: DataService,
              private bookService: BookService) { }


  ngOnInit() {
    this.subscription = this.bookService.booksChanged.subscribe(
      (books: Book[]) =>{
        this.books  = books
      }
    );
    this.dataService.getBooks();
    this.initForm();
    this.dataService.booksFromDifferentUsers();
  }

  private initForm(){
    let bookId;
    let bookTitle = '';
    let bookImagePath = '';
    let bookTopic = '';
    let bookAuthor = '';
    let bookCost;

    if(this.editMode){
      const book = this.books[this.index];
      bookId = book.bookId;
      bookTitle = book.bookTitle;
      bookTopic = book.topic;
      bookAuthor = book.author;
      bookImagePath = book.imgUrl;
      bookCost = book.cost;
    }

    this.newbookForm =  new FormGroup({
      'bookId': new FormControl(bookId, [Validators.required,Validators.pattern("^[0-9]*$"),
                                         Validators.maxLength(3)]),
      'title': new FormControl(bookTitle, Validators.required),
      'topic': new FormControl(bookTopic, Validators.required),
      'author':new FormControl(bookAuthor,Validators.required),
      'cost': new FormControl(bookCost, [Validators.required,Validators.pattern("^[0-9]*$"),
                                           Validators.maxLength(3)]),
      'imagePath': new FormControl(bookImagePath, Validators.required)
    })
  }

  onSubmit(){
    const newBook = new Book(
      this.newbookForm.value['bookId'],
      this.newbookForm.value['title'],
      this.newbookForm.value['topic'],
      this.newbookForm.value['author'],
      this.newbookForm.value['cost'],
      this.newbookForm.value['imagePath'],
      true
    );

    if(this.editMode){
      this.books[this.index].bookId = newBook.bookId;
      this.books[this.index].bookTitle = newBook.bookTitle;
      this.books[this.index].topic = newBook.topic;
      this.books[this.index].author = newBook.author;
      this.books[this.index].cost = newBook.cost;
      this.books[this.index].imgUrl = newBook.imgUrl;
      this.books[this.index].issued = newBook.issued;
      console.log(this.books);
    }else{
      this.books.push(newBook);
      console.log(this.books);
    }
  }

  onEditBook(index: number){
    this.editMode = true;
    this.index = index;
    this.initForm();
  }

  onCancel(){
    this.editMode = false;
    this.initForm();
  }

  onDelete(){
    this.books.splice(this.index,1);
    this.editMode = false;
    this.initForm();
  }

}
