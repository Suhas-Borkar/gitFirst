import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBComponent } from './dev-b.component';

describe('DevBComponent', () => {
  let component: DevBComponent;
  let fixture: ComponentFixture<DevBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
