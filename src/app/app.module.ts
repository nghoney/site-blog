import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    ScullyLibModule.forRoot({useTranferState: true, alwaysMonitor: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
