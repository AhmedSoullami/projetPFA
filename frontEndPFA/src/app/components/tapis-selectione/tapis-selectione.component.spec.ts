import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapisSelectioneComponent } from './tapis-selectione.component';

describe('TapisSelectioneComponent', () => {
  let component: TapisSelectioneComponent;
  let fixture: ComponentFixture<TapisSelectioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TapisSelectioneComponent]
    });
    fixture = TestBed.createComponent(TapisSelectioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
