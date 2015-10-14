import {Component, View, Directive} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {ElementRef} from 'angular2/core';


@Directive({
    selector: '[draggable]'
})
export class Draggable {
    startX:number = 0;
    startY:number = 0;
    x:number = 0;
    y:number = 0;
    document = DOM.defaultDoc();
    mousemove:Function;
    mousedown:Function;
    mouseup:Function;

    constructor(public element:ElementRef) {
        console.log('HELLO!', this);
    }

    onInit(): void {


        this.element.nativeElement.style.position = 'relative';
        this.element.nativeElement.style.cursor = 'move';

        this.mousemove = (event:any) => {
            this.y = event.screenY - this.startY;
            this.x = event.screenX - this.startX;
            this.element.nativeElement.style.top = this.y + 'px';
            this.element.nativeElement.style.left = this.x + 'px';
        };

        this.mousedown = (event:any) => {
            this.startX = event.screenX - this.x;
            this.startY = event.screenY - this.y;
            this.document.addEventListener('mousemove', this.mousemove, false);
            this.document.addEventListener('mouseup', this.mouseup, false);
        };

        this.mouseup = () => {
            this.document.removeEventListener('mousemove', this.mousemove);
            this.document.removeEventListener('mouseup', this.mouseup);
        };

        this.element.nativeElement.addEventListener('mousedown', this.mousedown, false);
    }

    onDestroy(): void {
        this.element.nativeElement.removeEventListener('mousedown', this.mousedown);
    }
}