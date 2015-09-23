import { Directive, ElementRef } from 'angular2/angular2';

@Directive({
    // using [ ] means selecting an attribute
    selector: '[x-large]'
})
export class XLarge {
    constructor(element: ElementRef) {
        element.nativeElement.style.fontSize = 'x-large';
    }
}
