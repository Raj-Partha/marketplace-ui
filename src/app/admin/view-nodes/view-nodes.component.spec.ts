import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNodesComponent } from './view-nodes.component';

describe('ViewNodesComponent', () => {
  let component: ViewNodesComponent;
  let fixture: ComponentFixture<ViewNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
