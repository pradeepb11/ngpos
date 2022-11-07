import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginposComponent } from './loginpos.component';

describe('LoginposComponent', () => {
  let component: LoginposComponent;
  let fixture: ComponentFixture<LoginposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
