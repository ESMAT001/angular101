import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppComponent } from './test-app.component';

describe('TestAppComponent', () => {
  let component: TestAppComponent;
  let fixture: ComponentFixture<TestAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
