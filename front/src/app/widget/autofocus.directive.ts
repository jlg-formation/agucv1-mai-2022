import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  @Input()
  appAutofocus = '';

  constructor(private elt: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.elt.nativeElement.focus();

    if (this.appAutofocus === 'select') {
      (this.elt.nativeElement as HTMLInputElement).select();
    }
  }
}
