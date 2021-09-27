import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrderSeparateComponent } from './form-order-separate.component';

describe('FormOrderSeparateComponent', () => {
  let component: FormOrderSeparateComponent;
  let fixture: ComponentFixture<FormOrderSeparateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOrderSeparateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrderSeparateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
