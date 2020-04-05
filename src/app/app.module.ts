import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AlbumComponent} from './components/album/album.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DetailComponent} from './screens/detail/detail.component';
import {FilterPipe} from './screens/home/filter.pipe';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './screens/home/home.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {SearchComponent} from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    SpinnerComponent,
    FilterPipe,
    AlbumComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
