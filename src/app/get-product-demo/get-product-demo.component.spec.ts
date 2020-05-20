import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductDemoComponent } from './get-product-demo.component';

describe('GetProductDemoComponent', () => {
  let component: GetProductDemoComponent;
  let fixture: ComponentFixture<GetProductDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetProductDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
