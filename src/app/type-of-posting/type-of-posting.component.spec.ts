import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfPostingComponent } from './type-of-posting.component';

describe('TypeOfPostingComponent', () => {
  let component: TypeOfPostingComponent;
  let fixture: ComponentFixture<TypeOfPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
