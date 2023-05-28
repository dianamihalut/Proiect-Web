import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilareComponent } from './epilare.component';

describe('EpilareComponent', () => {
  let component: EpilareComponent;
  let fixture: ComponentFixture<EpilareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpilareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpilareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
