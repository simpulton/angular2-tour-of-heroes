import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Draggable} from './draggable.directive';

@Component({
    selector: 'draggable-container',
    template: `<div draggable (update)="log($event)"></div>`,
    styles: [`
    [draggable] {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      background-image: url(https://angular.io/resources/images/logos/standard/shield-large.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      height: 200px;
      width: 200px;
      color: #000000;
      border: 1px solid #666666;
      padding: 10px;
    }
  `],
    directives: [CORE_DIRECTIVES, Draggable]
})
export class DraggableContainerComponent implements OnInit {
    constructor() { }
    onInit() { }

    log(message) {
        console.log('MESSAGE', message);
    }
}
