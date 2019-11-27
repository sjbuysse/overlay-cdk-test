import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { ArrayChildComponent } from './array-child/array-child.component';
import { ClickOutsideDirective } from './click-outside.directive';


@NgModule({
  declarations: [
    AppComponent,
    ArrayChildComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    OverlayModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
