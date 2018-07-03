import {ResourceLoader} from './js/base/ResourceLoader.js'
import {Director} from './js/Director.js'

// 初始化游戏，游戏入口
export class Main {
	constructor() {
		this.canvas = document.querySelector('canvas');
		this.ctx = this.canvas.getContext('2d');
		const loader = ResourceLoader.create();
		loader.onLoaded(map => this.onResourceLoaderFirstLoaded(map))
	
		Director.getInstance();
		Director.getInstance();
		Director.getInstance();

	}
	onResourceLoaderFirstLoaded(map) {
		console.log(map)
	}
}