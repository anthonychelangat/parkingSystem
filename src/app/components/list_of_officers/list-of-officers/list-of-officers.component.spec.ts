import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfOfficersComponent } from './list-of-officers.component';

describe('ListOfOfficersComponent', () => {
  let component: ListOfOfficersComponent;
  let fixture: ComponentFixture<ListOfOfficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfOfficersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
