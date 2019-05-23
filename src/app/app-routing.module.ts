import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BorrowlistComponent } from './borrow-list/borrowlist.component'
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { UsersbookComponent } from './admin/users/usersbook/usersbook.component';

const appRoutes: Routes = [
  { path:"", component: BooksComponent},
  { path: 'books', component: BooksComponent },
  { path: 'borrowed', component: BorrowlistComponent, canActivate: [AuthGuard]  },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'usersbook', component: UsersbookComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
