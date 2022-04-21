import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaPublicarDetallesComponent } from './noticia-publicar-detalles.component';

describe('NoticiaPublicarDetallesComponent', () => {
  let component: NoticiaPublicarDetallesComponent;
  let fixture: ComponentFixture<NoticiaPublicarDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaPublicarDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaPublicarDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
