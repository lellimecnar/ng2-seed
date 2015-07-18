import {Component, View} from 'angular/angular2';
import {RouterLink} from 'angular/router';

@Component({
  selector: 'component-1'
})
@View({
  templateUrl: './components/home/home.html',
  directives: [RouterLink]
})
export class Home {
	
}
