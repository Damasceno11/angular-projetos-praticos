import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imc } from './imc';

describe('Imc', () => {
  let component: Imc;
  let fixture: ComponentFixture<Imc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
