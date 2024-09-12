import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpsoftwareComponent } from './cmpsoftware.component';

describe('CmpsoftwareComponent', () => {
  let component: CmpsoftwareComponent;
  let fixture: ComponentFixture<CmpsoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpsoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpsoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
