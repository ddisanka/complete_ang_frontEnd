import { StudentUpdateComponent } from './../student-update/student-update.component';
import { Student } from 'src/Model/Student';
import { studentservice } from '../data-service/studentservice';
import { StudentAddComponent } from './../student-add/student-add.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css']
})

export class StudentCrudComponent implements OnInit {

  stdlist: Student[];
  dataavailbale: Boolean = false;
  tempstd: Student

  constructor(private dataservce: studentservice, private route: Router) {}

  ngOnInit() {
    this.LoadData();
  }

  LoadData() 
  {
    this.dataservce.GetStudent().subscribe((tempdate) => {
      this.stdlist = tempdate;
      console.log(this.stdlist);
      if (this.stdlist.length > 0) {
        this.dataavailbale = true;
      }
      else {
        this.dataavailbale = false;
      }
    }
    )
      , err => {
        console.log(err);
      }
  }
  deleteconfirmation(id: string) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.tempstd = new Student();
      this.tempstd.Id = id;
      this.dataservce.DeleteStudent(this.tempstd).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }
  @ViewChild('stdadd',{static:true}) addcomponent: StudentAddComponent
  @ViewChild('regForm',{static:true}) editcomponent: StudentUpdateComponent

  loadAddnew() 
  {
    this.addcomponent.objstd.Id = ""
    this.addcomponent.objstd.FirstName = ""
    this.addcomponent.objstd.LastName = ""
    this.addcomponent.objstd.Gender = ""
    this.addcomponent.objstd.Telephone = ""
    this.addcomponent.objstd.Email = ""
    this.addcomponent.objstd.Address = ""
    this.addcomponent.objstd.DOB = null
  }

  loadnewForm(Id: string, FirstName: string, LastName: string, Gender: string, 
    Telephone: string, Email: string, Address:string, DOB:Date) 
    {
    console.log(Gender);

    this.editcomponent.objstd.Id = Id
    this.editcomponent.objstd.FirstName = FirstName
    this.editcomponent.objstd.LastName = LastName
    this.editcomponent.objstd.Gender = Gender
    this.editcomponent.objstd.Telephone = Telephone
    this.editcomponent.objstd.Email = Email
    this.editcomponent.objstd.Address = Address
    this.editcomponent.objstd.DOB = DOB
  }

  RefreshData() {
    this.LoadData();
  }

}

