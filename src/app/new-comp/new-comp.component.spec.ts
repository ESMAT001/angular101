import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompComponent } from './new-comp.component';

describe('NewCompComponent', () => {
  let component: NewCompComponent;
  let fixture: ComponentFixture<NewCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
