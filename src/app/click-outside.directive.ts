import { AfterViewChecked, AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  amountOfClicksOutside = 0;

  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    this.amountOfClicksOutside++;
    // the first click outside opens up the overlay, we want to avoid that the same click also closes the overlay.
    if (this.amountOfClicksOutside > 1) {
      const clickedInside = this.elementRef.nativeElement.contains(target);
      if (!clickedInside && document.body.contains(target)) {
        this.clickOutside.emit();
      }
    }
  }
}
