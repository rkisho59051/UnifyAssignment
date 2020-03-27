import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProofComponent } from './customer-proof.component';

describe('CustomerProofComponent', () => {
  let component: CustomerProofComponent;
  let fixture: ComponentFixture<CustomerProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
