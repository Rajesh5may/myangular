import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendSidenavComponent } from './backend-sidenav.component';

describe('BackendSidenavComponent', () => {
  let component: BackendSidenavComponent;
  let fixture: ComponentFixture<BackendSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
