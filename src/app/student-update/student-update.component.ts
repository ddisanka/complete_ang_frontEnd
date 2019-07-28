import { Student } from 'src/Model/Student';
import { studentservice } from '../data-service/studentservice';
import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})

export class StudentUpdateComponent implements OnInit {

  constructor(private dataservice: studentservice, private route: Router) { }
  @Output() nameEvent = new EventEmitter<string>();

  @ViewChild('closeBtn',{static:true}) 
  cb: ElementRef;

  ngOnInit() {
  }

  @Input() reset: boolean = false;
  @ViewChild('regForm',{static:true}) myForm: NgForm;
  @Input() isReset: boolean = false;
  objtempstd: Student;
  @Input() objstd: Student = new Student();

  EditStudent(regForm: NgForm) 
  {
    this.dataservice.EditStudent(this.objstd).subscribe(res => {
      alert("Student updated successfully");
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click()
    })
  }
}
