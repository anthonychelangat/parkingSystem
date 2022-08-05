import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOfficerComponent } from './update-officer.component';

describe('UpdateOfficerComponent', () => {
  let component: UpdateOfficerComponent;
  let fixture: ComponentFixture<UpdateOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
