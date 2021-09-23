import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOrderCreationUpdatingDialogComponent } from './product-order-creation-updating-dialog.component';

describe('ProductOrderCreationUpdatingDialogComponent', () => {
  let component: ProductOrderCreationUpdatingDialogComponent;
  let fixture: ComponentFixture<ProductOrderCreationUpdatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOrderCreationUpdatingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOrderCreationUpdatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
