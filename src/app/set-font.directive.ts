import { Directive, ElementRef, Attribute } from 'angular2/angular2';

@Directive({
    // using [ ] means selecting an attribute
    selector: '[set-font]'
})
export class SetFont {
    constructor(element: ElementRef, @Attribute('set-font') color: string) {
        element.nativeElement.style.color = color;
    }
}