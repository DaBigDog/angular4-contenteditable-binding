import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContentEditableComponent }  from './custom-components/content-editable.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ContentEditableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
