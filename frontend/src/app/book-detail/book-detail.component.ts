 import { Component, OnInit, ViewEncapsulation } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

 @Component({
  selector: 'app-book-detail',
   templateUrl: './book-detail.component.html',
   styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
 })
export class BookDetailComponent implements OnInit {

  book = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    // this.getBookDetail(this.route.snapshot.params['']);
  }

  getBookDetail() {
    this.http.get('/book/').subscribe(data => {
      this.book = data;
    });
  }

 }