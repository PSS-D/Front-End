import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpserviceComponent } from './cmpservice.component';

describe('CmpserviceComponent', () => {
  let component: CmpserviceComponent;
  let fixture: ComponentFixture<CmpserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
