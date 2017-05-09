import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeattleTacomaComponent } from './seattle-tacoma.component';

describe('SeattleTacomaComponent', () => {
  let component: SeattleTacomaComponent;
  let fixture: ComponentFixture<SeattleTacomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeattleTacomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeattleTacomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
