import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books  } from './book/book.component';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor( 
    private http:HttpClient,
  )
  {}

  getAllBooks(){
    
    return this.http.get<Books[]>("http://localhost:8080/book/get");
  }

  // getAllBookById(seller:any){
  //   return this.http.get<Vehicle[]>(`${APP_URL}/vehiclesBySeller`,/* {headers}*/);
  // }
}
