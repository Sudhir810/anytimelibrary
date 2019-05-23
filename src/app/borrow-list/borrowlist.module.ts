import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowListEditComponent } from './borrow-list-edit/borrow-list-edit.component';
import { BorrowlistComponent } from './borrowlist.component';

@NgModule({

  declarations: [
    BorrowListEditComponent,
    BorrowlistComponent
  ],
  imports: [
    CommonModule
  ]
})


export class BorrowListModule {}
