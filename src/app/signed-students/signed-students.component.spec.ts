import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedStudentsComponent } from './signed-students.component';

describe('SignedStudentsComponent', () => {
  let component: SignedStudentsComponent;
  let fixture: ComponentFixture<SignedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignedStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
