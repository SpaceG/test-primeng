import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    ButtonModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
