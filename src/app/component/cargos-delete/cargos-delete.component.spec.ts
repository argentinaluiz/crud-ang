import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosDeleteComponent } from './cargos-delete.component';

describe('CargosDeleteComponent', () => {
  let component: CargosDeleteComponent;
  let fixture: ComponentFixture<CargosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
