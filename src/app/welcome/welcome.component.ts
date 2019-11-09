import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookSearchService } from '../book-search.service';
import { AuthService,AuthResponseData } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { auth } from 'firebase';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private bookSearchService:BookSearchService,private authService:AuthService,private router:Router) { }
  username='';
  isLoginMode=true;
  isLoading=false;
  error:string=null;
  ngOnInit() {
  }
  @Output() logIn:EventEmitter<boolean>=new EventEmitter<boolean>();
  onSubmit(form:NgForm)//sending the form when the user submitted
  {
   // this.username=form.value.email;
    //this.bookSearchService.userName.emit(form.value.email);
    this.logIn.emit(form.value.email);//emmited the user name to the app component
    if(!form.valid)
    {
      return;
    }
    const email=form.value.email;
    const password=form.value.password;
    let authObs:Observable<AuthResponseData>;
    this.isLoading=true;
    if(this.isLoginMode)
    {
      authObs=this.authService.login(email,password);
    }
    else
    {
      authObs=this.authService.signup(email,password);
    }
    authObs.subscribe(
      resData=>{
        console.log(resData);
        this.isLoading=false;
        this.authService.isLogged=true;
        this.router.navigate(['/search']);

      },
      errorMessage=>{
        console.log(errorMessage);
       this.error=errorMessage;
        this.isLoading=false;

      }

    );
   
  }
  onSwitchMode()
  {
    this.isLoginMode=false;
    console.log("33333333333");
  }
  
}
