import {Component, View, NgFor} from 'angular/angular2';

@Component({
	selector: 'component-2'
})
@View({
	templateUrl: './components/about/about.html',
	directives: [NgFor]
})
export class About {
	constructor() {
		this.list = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
	}

	addName(newname) {
		this.list.push(newname.value);
		newname.value = '';
	}
}
