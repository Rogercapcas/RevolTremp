import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorsComponent } from './colaboradors.component';

describe('ColaboradorsComponent', () => {
  let component: ColaboradorsComponent;
  let fixture: ComponentFixture<ColaboradorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
