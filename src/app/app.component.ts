import {View, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';
import {Draggable} from './draggable.directive';

@Component({ selector: 'my-app' })
@View({
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
  template: `
    <h1>{{title}}</h1>
    <a [router-link]="['/${Routes.dashboard.as}']">Dashboard</a>
    <a [router-link]="['/${Routes.heroes.as}']">Heroes</a>
    <router-outlet></router-outlet>
    <div draggable></div>
    `,
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, Draggable]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';
}
