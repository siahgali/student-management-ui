import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  public studentList: any;
  constructor(private studentService:StudentService) {
    
   }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(
        data => {this.studentList = data},
        err => console.error(err),
        () => console.log('Student list is ready')

    );
  }
}
