import {Home} from '../components/home/home';
import {About} from '../components/about/about';

export var routes = [
	{
		path: '/',
		component: Home,
		as: 'home'
	},
	{
		path: '/about',
		component: About,
		as: 'about'
	}
];
