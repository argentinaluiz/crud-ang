import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargoListComponent } from './component/cargo-list/cargo-list.component';
import { FormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CargoCreateComponent } from './component/cargo-create/cargo-create.component';



@NgModule({
  declarations: [
    AppComponent,
    CargoListComponent,
    CargoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
