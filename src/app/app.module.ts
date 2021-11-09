import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotoComponent } from './photo/photo.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    UserComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
