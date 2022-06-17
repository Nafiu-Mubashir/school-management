import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../service/student-services.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public behaviourService: StudentServicesService) { }
  public user: any = "";
  public firstname: string = "";
  public lastname: string = "";
  public matricNo: any = "";
  public phoneNo: any = "";
  public username: any = "";
  public email: any = "";
  public toEdit: any = "Edit";
  public status: boolean = false;
  public students: any = JSON.parse(localStorage.getItem("ListOfStudents")!);
  public edits = document.getElementById('edits') as HTMLInputElement;
  ngOnInit(): void {
    this.behaviourService.data.subscribe(response => {
      console.log(response);
      this.user = response
      this.firstname = this.user.firstname;
      this.lastname = this.user.lastname;
      this.username = this.user.username;
      this.email = this.user.email;
      this.phoneNo = this.user.phoneNo;
      this.matricNo = this.user.matricNum;
    })
  }

  edit() {
    const first = document.getElementById('first') as HTMLInputElement;
    const last = document.getElementById('last') as HTMLInputElement;
    const matric = document.getElementById('matric') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;
    const users = document.getElementById('user') as HTMLInputElement;
    const emails = document.getElementById('emails') as HTMLInputElement;
    this.status = true;
    if (this.firstname, this.lastname, this.username, this.email, this.phoneNo, this.matricNo) {
      // this.edits.setAttribute('disabled', 'true');
      if (this.toEdit == "Edit") {
        this.toEdit = 'Save Changes';
        first.removeAttribute('disabled');
        last.removeAttribute('disabled');
        phone.removeAttribute('disabled');
        users.removeAttribute('disabled');
      }
      else {
        console.log(this.user);

        let user = this.students.find((val: any, index: any) => val.matricNum == this.user.matricNum)
        console.log(user);

        if (user) {
          user.firstname = this.firstname;
          user.lastname = this.lastname;
          user.username = this.username;
          user.email = this.email;
          user.phoneNo = this.phoneNo;
          user.matricNum = this.matricNo;
          this.user.firstname = this.firstname;
          this.user.lastname = this.lastname;
          this.user.username = this.username;
          this.user.email = this.email;
          this.user.phoneNo = this.phoneNo;
          this.user.matricNum = this.matricNo;
          localStorage.setItem("ListOfStudents", JSON.stringify(this.students))
          console.log(this.students);

          this.toEdit = 'Edit';
          first.setAttribute('disabled', 'true');
          last.setAttribute('disabled', 'true');
          phone.setAttribute('disabled', 'true');
          users.setAttribute('disabled', 'true');
        }
      }
    }
    else {
      alert("The fields are empty")
    }

  }
  deletes() {
    if (this.firstname, this.lastname, this.username, this.email, this.phoneNo, this.matricNo) {
      let user = this.students.filter((val: any, index: any) => val.matricNum != this.user.matricNum)
      // console.log(user);
      localStorage.setItem("ListOfStudents", JSON.stringify(user));
    }
    else {
      alert("The fields are empty")
    }
  }
}
