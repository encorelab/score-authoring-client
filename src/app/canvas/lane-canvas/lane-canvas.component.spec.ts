import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneCanvasComponent } from './lane-canvas.component';

describe('LaneCanvasComponent', () => {
  let component: LaneCanvasComponent;
  let fixture: ComponentFixture<LaneCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaneCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaneCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
