import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosComprarComponent } from './productos-comprar.component';

describe('ProductosComprarComponent', () => {
  let component: ProductosComprarComponent;
  let fixture: ComponentFixture<ProductosComprarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosComprarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
