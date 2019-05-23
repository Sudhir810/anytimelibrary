import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
//--------------Modules-------------------
import { BorrowListModule } from './borrow-list/borrowlist.module';
import { BookModule } from './books/book.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
//-------------Services------------------------
import { BorrowService } from './borrow-list/borrowlist.service';
import { DataService } from './data.service';
import { AuthService } from './auth/auth.service';
import { BookService } from './books/book.service';
import { AuthGuard } from './auth/auth-guard.service';
//----------------components-------------------
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UsersbookComponent } from './admin/users/usersbook/usersbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    UsersbookComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BorrowListModule,
    BookModule,
    AuthModule,

  ],
  providers: [BookService,
              BorrowService,
              DataService,
              AuthService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
