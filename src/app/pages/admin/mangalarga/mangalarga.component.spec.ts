import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangalargaComponent } from './mangalarga.component';

describe('MangalargaComponent', () => {
  let component: MangalargaComponent;
  let fixture: ComponentFixture<MangalargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangalargaComponent]
    });
    fixture = TestBed.createComponent(MangalargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
