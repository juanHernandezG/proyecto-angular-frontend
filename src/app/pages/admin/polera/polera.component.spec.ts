import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleraComponent } from './polera.component';

describe('PoleraComponent', () => {
  let component: PoleraComponent;
  let fixture: ComponentFixture<PoleraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoleraComponent]
    });
    fixture = TestBed.createComponent(PoleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
