import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cerveja } from './cerveja';

describe('Cerveja', () => {
  let component: Cerveja;
  let fixture: ComponentFixture<Cerveja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cerveja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cerveja);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
