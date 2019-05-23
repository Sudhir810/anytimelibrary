import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() bookElement: Book;
  @Input() index: number;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onDisplayItem(){
    //console.log(this.bookService.getBook(this.index));
    this.bookService.bookToDisplay.next(this.bookService.getBook(this.index));
  }

}
