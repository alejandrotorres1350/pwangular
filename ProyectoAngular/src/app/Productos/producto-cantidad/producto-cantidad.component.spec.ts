import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCantidadComponent } from './producto-cantidad.component';

describe('ProductoCantidadComponent', () => {
  let component: ProductoCantidadComponent;
  let fixture: ComponentFixture<ProductoCantidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoCantidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
