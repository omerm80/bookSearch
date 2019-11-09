import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  userName=new EventEmitter<string>();
  user='';
  URL="https://www.googleapis.com/books/v1/volumes?q=";
  API_KEY="AIzaSyB71mDQnt2k3v8t-aLUGgzBurL5wqFAKaI";
  bookName=new EventEmitter<string>();
  books:Book[]=[];
  wishListBooks:Book[]=[];
  constructor(private http: HttpClient) { 

  }

  SearchBooks(bookName:string,index:number)//search a book in Google API
  {
    return  this.http.get(this.URL+bookName+"&key="+this.API_KEY+"&maxResults=20&startIndex="+index).map((res:Response)=>res); 
  
  }
  
  




}


