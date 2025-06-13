import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pledges } from './pledges';

describe('Pledges', () => {
  let component: Pledges;
  let fixture: ComponentFixture<Pledges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pledges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pledges);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
