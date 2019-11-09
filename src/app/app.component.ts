import { Component } from '@angular/core';
import { BookSearchService } from './book-search.service';
import { AuthService } from './welcome/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogIn:boolean=false;
  userName:string='';
  constructor(private bookService:BookSearchService,private authService:AuthService){
    this.isLogIn=this.authService.isLogged;
  }
  logToSite(user:string)//calls when is Logged into the site
  {
    this.isLogIn=true;
    this.bookService.user=user;
    this.userName=user;
  
  }
}
