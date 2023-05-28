import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesajComponent } from './mesaj.component';

describe('MesajComponent', () => {
  let component: MesajComponent;
  let fixture: ComponentFixture<MesajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
