import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  studentForm!: FormGroup ;
  validateMessage: string = "";
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      family: new FormControl('', Validators.required)
    })
  }

  submitStudent(){
      if (this.studentForm.valid) {
        this.studentService.createStudent(this.studentForm.value).subscribe(
          data => {
            this.studentForm.reset();
            return true;
          },
          error => {
            console.error(error);
          }
        )
        
      } else {
        this.validateMessage = "Please complete all fields!"
      }
  }
}
