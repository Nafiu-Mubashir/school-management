import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public listOfStudents:any = JSON.parse(localStorage.getItem("ListOfStudents")!)
  public student:any = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    username: "",
    matricNum: "11" + Math.floor(Math.random() *1000)
  }
  public userList:any = [];
  constructor() { }

  ngOnInit(): void {
    console.log( );

  }
  submit () {
    // let user = this.listOfStudents.find((val:any) => val.email == this.listOfStudents.email && val.matricNum == this.listOfStudents.matricNum)
    // console.log(user);
    if (this.listOfStudents) {
      this.userList = this.listOfStudents
    }
    else{
      this.userList
    }
    this.userList = [...this.userList, this.student];
    
    localStorage.setItem("ListOfStudents", JSON.stringify(this.userList));
    this.student.firstname = "";
    this.student.lastname = "";
    this.student.email = "";
    this.student.phoneNo = "";
    this.student.username = "";
  }
}
