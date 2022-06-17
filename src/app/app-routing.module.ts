import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';

const routes: Routes = [
  // {path: "/", component:SignupComponent},
  {path: "signup", component:SignupComponent},
  {path: "studentdetails", component:StudentsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
