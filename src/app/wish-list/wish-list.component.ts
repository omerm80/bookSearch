import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../book-search.service';
import { Book } from '../book';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(private bookSearchService:BookSearchService) { }
  wishListBooks:Book[]=[];
  
  ngOnInit() {
    this.wishListBooks=this.bookSearchService.wishListBooks;
    
  }
  removeBookFromWishList(book)
  { 
    this.bookSearchService.wishListBooks.splice(this.bookSearchService.wishListBooks.indexOf(book), 1);
    this.wishListBooks=this.bookSearchService.wishListBooks;

  }
}
