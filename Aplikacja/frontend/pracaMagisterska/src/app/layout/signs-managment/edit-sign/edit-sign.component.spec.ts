import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSignComponent } from './edit-sign.component';

describe('EditSignComponent', () => {
  let component: EditSignComponent;
  let fixture: ComponentFixture<EditSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
