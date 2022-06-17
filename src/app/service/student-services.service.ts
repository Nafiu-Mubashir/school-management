import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {

  constructor() { }
  public data = new BehaviorSubject("")
}
