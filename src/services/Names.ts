let _names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];

export class Names {

	static get list() {
		return _names;
	}

	static add(value: string) {
		_names.push(value);
		return _names;
	}
}
