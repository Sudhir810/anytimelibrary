import { EventEmitter} from '@angular/core';
import { Book } from '../models/book.model';
import { Subject } from 'rxjs';

export class BorrowService {

  bookAdded = new Subject<Book[]>();
  startedEditing  = new Subject<number>();

  private books: Book[] = [];

  onBookAdded(book: Book) {
    this.books.push(book);
    this.bookAdded.next(this.books.slice());
  }

  getBooks() {
    return this.books;
  }

  // updateIngredient(index: number, newIngredient: Ingredient){
  //   this.ingredients[index] = newIngredient;
  //   this.ingredientAdded.next(this.ingredients.slice());
  // }

  // deleteIngredient(index: number){
  //   this.ingredients.splice(index,1);
  //   this.ingredientAdded.next(this.ingredients.slice());
  // }

  // onIngredientsAdded(ingredients: Ingredient[]){
  //   this.ingredients.push(...ingredients);
  //   this.ingredientAdded.next(this.ingredients.slice());
  // }

  // getIngredients() {
  //   return this.ingredients.slice();
  // }
}
