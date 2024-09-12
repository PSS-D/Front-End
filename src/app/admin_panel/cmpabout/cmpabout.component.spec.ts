import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpaboutComponent } from './cmpabout.component';

describe('CmpaboutComponent', () => {
  let component: CmpaboutComponent;
  let fixture: ComponentFixture<CmpaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
