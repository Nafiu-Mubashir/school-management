import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signed-students',
  templateUrl: './signed-students.component.html',
  styleUrls: ['./signed-students.component.css']
})
export class SignedStudentsComponent implements OnInit {

  // public users:any = [];
  constructor(public router: Router) { }

  ngOnInit(): void {

  }
  view () {
    this.router.navigate(["/studentdetails"])
  }

}
