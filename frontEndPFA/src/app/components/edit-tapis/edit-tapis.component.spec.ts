import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTapisComponent } from './edit-tapis.component';

describe('EditTapisComponent', () => {
  let component: EditTapisComponent;
  let fixture: ComponentFixture<EditTapisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTapisComponent]
    });
    fixture = TestBed.createComponent(EditTapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
