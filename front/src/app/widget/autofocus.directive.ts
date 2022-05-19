import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  constructor(private elt: ElementRef<HTMLElement>) {
    console.log('instantiate autofocus directive');
  }

  ngOnInit(): void {
    console.log('elt.nativeElement: ', this.elt.nativeElement);
    this.elt.nativeElement.focus();
  }
}
