import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductDemoComponent } from './list-product-demo.component';

describe('ListProductDemoComponent', () => {
  let component: ListProductDemoComponent;
  let fixture: ComponentFixture<ListProductDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
