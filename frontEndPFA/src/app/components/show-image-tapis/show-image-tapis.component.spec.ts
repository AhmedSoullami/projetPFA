import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowImageTapisComponent } from './show-image-tapis.component';

describe('ShowImageTapisComponent', () => {
  let component: ShowImageTapisComponent;
  let fixture: ComponentFixture<ShowImageTapisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowImageTapisComponent]
    });
    fixture = TestBed.createComponent(ShowImageTapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
