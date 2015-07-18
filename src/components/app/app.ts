import {Component, View, NgFor} from 'angular/angular2';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular/router';

import {routes} from '../../config/routes';

@Component({
	selector: 'app'
})
@RouteConfig(routes)
@View({
	templateUrl: './components/app/app.html',
	directives: [RouterOutlet, RouterLink]
})
export class App {

}
