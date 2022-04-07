import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetallesComponent } from './noticia-detalles.component';

describe('NoticiaDetallesComponent', () => {
  let component: NoticiaDetallesComponent;
  let fixture: ComponentFixture<NoticiaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
