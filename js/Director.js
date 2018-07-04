import {DataStore} from './base/DataStore.js';
import {TopPencil} from './runtime/TopPencil.js';
import {BottomPencil} from './runtime/BottomPencil.js';

// 导演类，负责游戏逻辑
export class Director {
	constructor() {
		this.dataStore = DataStore.getInstance();
	}
	//单例模式，只允许一个导演存在
	static getInstance() {
		if (!Director.instance) {
			Director.instance = new Director();
		}
		return Director.instance;
	}

	createPencil() {
		const minTop = window.innerHeight/8;
		const maxTop = window.innerHeight/2;
		const top = minTop + Math.random() * (maxTop - minTop);
		this.dataStore.get('pencils').push(new TopPencil(top));
		this.dataStore.get('pencils').push(new BottomPencil(top));
	}

	run() {
		this.dataStore.get('bg').draw();
		this.dataStore.get('land').draw();
		this.dataStore.get('pencils').forEach(function(value) {
			value.draw();
		})

		let timer = requestAnimationFrame(()=>{this.run()});
		this.dataStore.put('timer',timer);
		// cancelAnimationFrame(this.dataStore.get('timer'));
	}
}