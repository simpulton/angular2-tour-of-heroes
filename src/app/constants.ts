import {FORM_DIRECTIVES, NgClass, NgFor, NgIf} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FontColor} from './font-color.directive';
import {XLarge} from './xlarge.directive';
import {Draggable} from './draggable.directive';

export const HERO_DIRECTIVES = [FORM_DIRECTIVES, NgClass, NgFor, NgIf, Draggable, FontColor, XLarge, ROUTER_DIRECTIVES];
