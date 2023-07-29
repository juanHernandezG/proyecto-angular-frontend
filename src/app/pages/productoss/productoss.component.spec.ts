import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductossComponent } from './productoss.component';

describe('ProductossComponent', () => {
  let component: ProductossComponent;
  let fixture: ComponentFixture<ProductossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductossComponent]
    });
    fixture = TestBed.createComponent(ProductossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
