import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductDemoComponent } from './create-product-demo.component';

describe('CreateProductDemoComponent', () => {
  let component: CreateProductDemoComponent;
  let fixture: ComponentFixture<CreateProductDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
