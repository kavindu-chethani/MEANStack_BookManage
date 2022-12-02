import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookServiceService} from '../book-service.service';

export class Books{
  constructor(
    public isbn:String,
    public title:String,
    public author:String,
    public description:String,
    public published_year:String,
    public publisher:String
  
  ){}
}


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  Books: any = [];
  isbn:any;
  title:any;
  author:any;
  description:any;
  published_year:any;
  publisher:any;

  constructor(
    private BookService: BookServiceService,
   
  ) { }


  ngOnInit(): void {
    
    this.BookService.getAllBooks().subscribe(
      data => {
        this.Books = data;
        console.log(data)
      
        
      }
    )
  }

 }
