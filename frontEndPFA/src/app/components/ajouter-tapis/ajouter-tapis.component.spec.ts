import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTapisComponent } from './ajouter-tapis.component';

describe('AjouterTapisComponent', () => {
  let component: AjouterTapisComponent;
  let fixture: ComponentFixture<AjouterTapisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterTapisComponent]
    });
    fixture = TestBed.createComponent(AjouterTapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
