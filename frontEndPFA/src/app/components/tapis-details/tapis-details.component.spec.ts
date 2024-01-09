import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapisDetailsComponent } from './tapis-details.component';

describe('TapisDetailsComponent', () => {
  let component: TapisDetailsComponent;
  let fixture: ComponentFixture<TapisDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TapisDetailsComponent]
    });
    fixture = TestBed.createComponent(TapisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
