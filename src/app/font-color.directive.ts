import { Directive, ElementRef, Attribute } from 'angular2/angular2';

@Directive({
    // using [ ] means selecting an attribute
    selector: '[font-color]'
})
export class FontColor {
    constructor(element: ElementRef, @Attribute('font-color') color: string) {
        element.nativeElement.style.color = color;
    }
}