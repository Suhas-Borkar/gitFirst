import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAComponent } from './dev-a.component';

describe('DevAComponent', () => {
  let component: DevAComponent;
  let fixture: ComponentFixture<DevAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
