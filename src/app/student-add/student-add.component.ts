import { studentservice } from '../data-service/studentservice';
import { Student } from 'src/Model/Student';
import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})

export class StudentAddComponent implements OnInit {

  @Input() cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objtempstd: Student;
  @Input() objstd: Student = new Student();
  @ViewChild('closeBtn', { static: true }) cb: ElementRef;

  constructor(private dataservice: studentservice, private route: Router) { }

  ngOnInit() {
    // this.ResetValues();
  }

  ResetValues() {

  }

  Register(regForm: NgForm) 
  {
    this.objtempstd = new Student();
    this.objtempstd.FirstName = regForm.value.FirstName;
    this.objtempstd.LastName = regForm.value.LastName;
    this.objtempstd.Gender = regForm.value.Gender;
    this.objtempstd.Telephone = regForm.value.Telephone;
    this.objtempstd.Email = regForm.value.Email;
    this.objtempstd.Address = regForm.value.Address;
    this.objtempstd.DOB = regForm.value.DOB;

    this.dataservice.AddStudent(this.objtempstd).subscribe(res => {
      alert("Student Added successfully");
      this.TakeHome();
    })
  }

  TakeHome() 
  {
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}