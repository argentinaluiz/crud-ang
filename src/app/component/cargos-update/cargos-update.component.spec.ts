import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosUpdateComponent } from './cargos-update.component';

describe('CargosUpdateComponent', () => {
  let component: CargosUpdateComponent;
  let fixture: ComponentFixture<CargosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
