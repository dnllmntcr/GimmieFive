import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantProductComponent } from './variant-product.component';

describe('VariantProductComponent', () => {
  let component: VariantProductComponent;
  let fixture: ComponentFixture<VariantProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariantProductComponent]
    });
    fixture = TestBed.createComponent(VariantProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
