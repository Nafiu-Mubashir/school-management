import { Component, Input, OnInit } from '@angular/core';
import { StudentServicesService } from '../service/student-services.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  public students:any = JSON.parse(localStorage.getItem("ListOfStudents")!);
  public userLists:any = [];
  constructor(public behaviouralService: StudentServicesService) { }

  ngOnInit(): void {
    this.userLists = this.students;
  }
  details (i:any) {
    let findUser = this.students.find((val:any, index:any) => index == i)
    this.behaviouralService.data.next(findUser)
    console.log(findUser);

  }
}
