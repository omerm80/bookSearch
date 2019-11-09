  import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import { BookSearchService } from '../book-search.service';
import { Book } from '../book';
import { Inject} from '@angular/core';
import { BookInformationComponent } from '../book-information/book-information.component';
import {  MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],  
  entryComponents:[BookInformationComponent],

})
export class SearchComponent implements OnInit {
  constructor(private bookSearchService: BookSearchService,private dialog: MatDialog) { }
  selectedBooks:Book[]=[];//array for the results of the search
  userName:string="";
  popUpIsOpen:boolean=false;
  dialogRef:any;
  isNextButtonDisabled:boolean=false;
  dialogResult="";
  itemsPerPage=20;
  startIndex=0;
  ngOnInit() {
  this.userName=this.bookSearchService.user;
  }

  OnSearch(s,startIndex){//triggerd when the user enter a book name for search and a start index

    this.startIndex=startIndex;

    if(this.popUpIsOpen)
    {
      this.dialogRef.close();
    }
      this.bookSearchService.books=[]; 
    
      this.bookSearchService.SearchBooks(s,startIndex)//call the service to search books on the API
        .subscribe((data) => {
          this.isNextButtonDisabled = this.startIndex + this.itemsPerPage > data["totalItems"];//check if the next button should be disabled
          data["items"].forEach(element => {
           
              this.bookSearchService.books.push(new Book(element.volumeInfo.title,element.volumeInfo.authors,
                element.volumeInfo.publishedDate,element.volumeInfo.publisher,element.volumeInfo.description,element.volumeInfo.averageRating,element.volumeInfo.categories,element.volumeInfo.imageLinks.smallThumbnail))
          
              //make a book object of every book that it got from the api and add to the service book array
           
            
            });

        });
        console.log(this.bookSearchService.books.length);

        this.selectedBooks=this.bookSearchService.books;

      
  }
  ngOnDestroy(){
    if(this.popUpIsOpen){//close the popUpBox if it's opened
      this.dialogRef.close();

    }

  }

  openDialog(book:Book):void//open a dialog box with the book's information
  {
   if(this.popUpIsOpen==true)
   {
     this.dialogRef.close();
   }
    this.popUpIsOpen=true;
     this.dialogRef=this.dialog.open(BookInformationComponent,{
      data:{
        book

      }
    });
    this.dialogRef.afterClosed().subscribe(result=>{
      console.log('the dialog was closed');
      console.log(result);
    })
  }

 
  
  }


