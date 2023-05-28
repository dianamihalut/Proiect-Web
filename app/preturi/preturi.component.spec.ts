import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreturiComponent } from './preturi.component';

describe('PreturiComponent', () => {
  let component: PreturiComponent;
  let fixture: ComponentFixture<PreturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreturiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
