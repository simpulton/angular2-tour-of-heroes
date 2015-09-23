import {FORM_DIRECTIVES, NgClass, NgFor, NgIf} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SetFont} from './set-font.directive';
import {XLarge} from './xlarge.directive';

export const HERO_DIRECTIVES = [FORM_DIRECTIVES, NgClass, NgFor, NgIf, SetFont, XLarge, ROUTER_DIRECTIVES];
