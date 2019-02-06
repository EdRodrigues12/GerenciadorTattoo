import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPesquisaComponent } from './agenda-pesquisa.component';

describe('AgendaPesquisaComponent', () => {
  let component: AgendaPesquisaComponent;
  let fixture: ComponentFixture<AgendaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
