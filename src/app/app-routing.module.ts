import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path:'',component:StudentCrudComponent},
{path:'Edit',component:StudentUpdateComponent},
{path:'Add',component:StudentAddComponent},
{path:'Home',component:StudentCrudComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
