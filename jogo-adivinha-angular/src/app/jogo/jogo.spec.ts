import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jogo } from './jogo';

describe('Jogo', () => {
  let component: Jogo;
  let fixture: ComponentFixture<Jogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
