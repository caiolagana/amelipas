import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estatuto } from './estatuto';

describe('Estatuto', () => {
  let component: Estatuto;
  let fixture: ComponentFixture<Estatuto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estatuto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estatuto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
