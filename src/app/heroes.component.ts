import {Component, OnInit, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {Routes} from './route.config';

@Component({ selector: 'my-heroes' })
@View({
  templateUrl: 'app/heroes.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) { }

  onInit() {
    this.heroes = this.getHeroes();
  }

  getHeroes() {
    this.selectedHero = undefined;
    this.heroes = [];

    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes);

    return this.heroes;
  }

  getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.selectedHero };
  }

  goDetail() {
    // this._router.navigateByUrl(`detail/${this.selectedHero.id}`);
    this._router.navigate([`/${Routes.detail.as}`, { id: this.selectedHero.id }]);
    // this._router.navigate([`./${Routes.detail.as}`, { id: this.selectedHero.id }]);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
