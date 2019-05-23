import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './books-list/book-item/book-item.component';
import { BooksDisplayComponent } from './books-display/books-display.component';

@NgModule({

  declarations: [
    BooksComponent,
    BooksListComponent,
    BookItemComponent,
    BooksDisplayComponent
  ],
  imports: [
    CommonModule
  ]

})

export class BookModule {}
