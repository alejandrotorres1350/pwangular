import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAgregarComponent } from './productos-agregar.component';

describe('ProductosAgregarComponent', () => {
  let component: ProductosAgregarComponent;
  let fixture: ComponentFixture<ProductosAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
