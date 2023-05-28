import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaprincipalaComponent } from './paginaprincipala.component';

describe('PaginaprincipalaComponent', () => {
  let component: PaginaprincipalaComponent;
  let fixture: ComponentFixture<PaginaprincipalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaprincipalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaprincipalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
