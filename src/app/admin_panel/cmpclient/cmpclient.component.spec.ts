import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpclientComponent } from './cmpclient.component';

describe('CmpclientComponent', () => {
  let component: CmpclientComponent;
  let fixture: ComponentFixture<CmpclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
