import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoaforComponent } from './coafor.component';

describe('CoaforComponent', () => {
  let component: CoaforComponent;
  let fixture: ComponentFixture<CoaforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoaforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoaforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
