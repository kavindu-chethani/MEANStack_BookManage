import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

//Create constant router for routing to book component

const appRoutes: Routes = [
  {
    path: 'books',
      component: BookComponent,
      data: { title: 'Book List' }
    },
    {
      path: 'book-details/:id',
      component: BookDetailComponent,
      data: { title: 'Book Details' }
    },
    { path: '',
      redirectTo: '/books',
      pathMatch: 'full'
    }
]; 

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  
  
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
