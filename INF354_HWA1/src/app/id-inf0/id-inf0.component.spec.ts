import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDInf0Component } from './id-inf0.component';

describe('IDInf0Component', () => {
  let component: IDInf0Component;
  let fixture: ComponentFixture<IDInf0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDInf0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDInf0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
