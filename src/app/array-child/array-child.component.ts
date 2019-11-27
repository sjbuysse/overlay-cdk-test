import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CdkConnectedOverlay, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-array-child',
  templateUrl: './array-child.component.html',
  styleUrls: ['./array-child.component.scss']
})
export class ArrayChildComponent implements OnInit {
  @Input() nameObject: any;
  @ViewChild(CdkConnectedOverlay, {static: false}) overlayRef: CdkConnectedOverlay;
  isOpen = false;

  constructor() {
  }

  ngOnInit() {
  }


  myRandomButtonCallback() {
    console.log('hello, here we can navigate or whatever');
    this.isOpen = false;
  }
}
