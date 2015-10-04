import {Component, View, Directive} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {ElementRef} from 'angular2/core';


@Directive({
    selector: '[draggable]'
})
export class Draggable {
    startX: number = 0;
    startY: number = 0;
    x: number = 0;
    y: number = 0;
    document = DOM.defaultDoc();

    constructor(public element: ElementRef) {

    }

    onInit() {

        this.element.nativeElement.style.position = 'relative';
        this.element.nativeElement.style.cursor = 'move';

        var mousemove;
        var mousedown;
        var mouseup;

        mousemove = (event) => {
            this.y = event.screenY - this.startY;
            this.x = event.screenX - this.startX;
            this.element.nativeElement.style.top  = this.y + 'px';
            this.element.nativeElement.style.left = this.x + 'px';
        };

        mousedown = (event) => {
            this.startX = event.screenX - this.x;
            this.startY = event.screenY - this.y;
            this.document.addEventListener('mousemove', mousemove, false);
            this.document.addEventListener('mouseup', mouseup, false);
        };

        mouseup = () => {
            this.document.removeEventListener('mousemove', mousemove);
            this.document.removeEventListener('mouseup', mouseup);
        };

        this.element.nativeElement.addEventListener('mousedown', mousedown, false);
    }

}