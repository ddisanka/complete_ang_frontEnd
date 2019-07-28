import { studentservice } from './data-service/studentservice';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentCrudComponent,
    StudentAddComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [studentservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
