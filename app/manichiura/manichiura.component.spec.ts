import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManichiuraComponent } from './manichiura.component';

describe('ManichiuraComponent', () => {
  let component: ManichiuraComponent;
  let fixture: ComponentFixture<ManichiuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManichiuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManichiuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
