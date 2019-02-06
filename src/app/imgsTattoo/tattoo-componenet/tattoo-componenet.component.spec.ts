import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooComponenetComponent } from './tattoo-componenet.component';

describe('TattooComponenetComponent', () => {
  let component: TattooComponenetComponent;
  let fixture: ComponentFixture<TattooComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TattooComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
