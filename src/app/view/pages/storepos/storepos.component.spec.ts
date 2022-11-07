import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreposComponent } from './storepos.component';

describe('StoreposComponent', () => {
  let component: StoreposComponent;
  let fixture: ComponentFixture<StoreposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
