import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FinishedBookComponent } from './finished-book/finished-book.component';
import { DroppedBookComponent } from './dropped-book/dropped-book.component';
import { CurrentBookComponent } from './current-book/current-book.component';
import { WishlistBookComponent } from './wishlist-book/wishlist-book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'finishedBook', component: FinishedBookComponent },
  { path: 'droppedBook', component: DroppedBookComponent },
  { path: 'currentBook', component: CurrentBookComponent },
  { path: 'wishlistBook', component: WishlistBookComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
