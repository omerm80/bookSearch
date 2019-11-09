import { Component, OnInit ,Inject} from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../book';
import { BookSearchService } from '../book-search.service';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.css']
})
export class BookInformationComponent implements OnInit {
  message: string = "Are you sure?";
  confirmButtonText = "Yes";
  cancelButtonText = "Cancel";
  constructor(private bookSearchService:BookSearchService,public dialogRef:MatDialogRef<BookInformationComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any
    )
    {
      
    }
    


  ngOnInit() {


  }
 
save(data:Book)
{
  this.dialogRef.close("Added to wishlist");
  this.bookSearchService.wishListBooks.push(data);
  this.data="";

  console.log("the wish list is add :"+ data);

}
cancelPop()
{
  this.dialogRef.close("Popup Box Cancelled");

  this.data="";
}
}

