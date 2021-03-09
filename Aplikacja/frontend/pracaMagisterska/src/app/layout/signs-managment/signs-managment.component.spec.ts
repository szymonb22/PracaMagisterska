import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignsManagmentComponent } from './signs-managment.component';

describe('SignsManagmentComponent', () => {
  let component: SignsManagmentComponent;
  let fixture: ComponentFixture<SignsManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignsManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
