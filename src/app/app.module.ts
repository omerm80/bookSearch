import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BookInformationComponent } from './book-information/book-information.component';
import {MatDialogModule,MatButtonModule,MatCheckboxModule,MatTableModule,} from '@angular/material';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishListComponent } from './wish-list/wish-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes} from '@angular/router';
import { BookSearchService } from './book-search.service';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path: 'wishList', component: WishListComponent},
  {path: 'search', component: SearchComponent},
  {path: 'welcome', component: WelcomeComponent},
  
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    BookInformationComponent,
    WishListComponent,
    HeaderComponent,LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
     MatDialogModule,
    MatButtonModule,
   MatCheckboxModule,
   MatTableModule,
   RouterModule.forRoot(routes)
  
  ],
  providers: [BookSearchService],
  bootstrap: [AppComponent],  
  entryComponents:[BookInformationComponent],

})
export class AppModule { }
