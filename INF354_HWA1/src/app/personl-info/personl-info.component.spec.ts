import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonlInfoComponent } from './personl-info.component';

describe('PersonlInfoComponent', () => {
  let component: PersonlInfoComponent;
  let fixture: ComponentFixture<PersonlInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonlInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonlInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
