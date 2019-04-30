import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePipeComponent } from './componente-pipe.component';

describe('ComponentePipeComponent', () => {
  let component: ComponentePipeComponent;
  let fixture: ComponentFixture<ComponentePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
