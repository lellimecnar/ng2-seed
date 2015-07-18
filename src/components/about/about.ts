import {Component, View, NgFor} from 'angular/angular2';

import {Names} from '../../services/Names';

@Component({
	selector: 'component-2'
})
@View({
	templateUrl: './components/about/about.html',
	directives: [NgFor]
})
export class About {
	constructor() {
		this.list = Names.list;
	}

	addName(newname) {
		this.list = Names.add(newname.value);
		newname.value = '';
	}
}
