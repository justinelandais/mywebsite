import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoulageComponent } from './moulage.component';

describe('MoulageComponent', () => {
  let component: MoulageComponent;
  let fixture: ComponentFixture<MoulageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoulageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoulageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
