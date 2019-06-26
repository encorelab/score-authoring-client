import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lane-canvas',
  templateUrl: './lane-canvas.component.html',
  styleUrls: ['./lane-canvas.component.scss']
})

export class LaneCanvasComponent implements OnInit {

  @Input()
  laneType: string;
  constructor() { }

  steps = [
    'Video',
    'Text Field',
    'Tagging',
    'Sort Tags',
    'Create presentation',
    'Present'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.steps, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    console.log('laneType', this.laneType);
  }

}
