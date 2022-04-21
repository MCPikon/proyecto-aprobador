import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPublicarComponent } from './listado-publicar.component';

describe('ListadoPublicarComponent', () => {
  let component: ListadoPublicarComponent;
  let fixture: ComponentFixture<ListadoPublicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPublicarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPublicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
