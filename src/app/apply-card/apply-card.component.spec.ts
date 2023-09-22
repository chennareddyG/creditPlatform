import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCardComponent } from './apply-card.component';

describe('ApplyCardComponent', () => {
  let component: ApplyCardComponent;
  let fixture: ComponentFixture<ApplyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyCardComponent]
    });
    fixture = TestBed.createComponent(ApplyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
