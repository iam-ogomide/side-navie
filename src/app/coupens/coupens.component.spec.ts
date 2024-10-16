import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupensComponent } from './coupens.component';

describe('CoupensComponent', () => {
  let component: CoupensComponent;
  let fixture: ComponentFixture<CoupensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
