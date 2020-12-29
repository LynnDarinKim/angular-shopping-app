import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }




}


// method -
// listens to clicks
// and then toggles some property which determines whether some class is attached or not and
// also try implementing some code which dynamically attaches a CSS class or not.


