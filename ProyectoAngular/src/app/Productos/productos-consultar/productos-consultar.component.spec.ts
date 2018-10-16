import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosConsultarComponent } from './productos-consultar.component';

describe('ProductosConsultarComponent', () => {
  let component: ProductosConsultarComponent;
  let fixture: ComponentFixture<ProductosConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
