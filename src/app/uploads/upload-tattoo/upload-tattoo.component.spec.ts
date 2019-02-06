import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTattooComponent } from './upload-tattoo.component';

describe('UploadTattooComponent', () => {
  let component: UploadTattooComponent;
  let fixture: ComponentFixture<UploadTattooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTattooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
