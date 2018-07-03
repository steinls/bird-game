import {ResourceLoader} from './js/base/ResourceLoader.js'
import {Director} from './js/Director.js'
import {BackGround} from './js/runtime/BackGround.js'

// 初始化游戏，游戏入口
export class Main {
	constructor() {
		this.canvas = document.querySelector('canvas');
		this.ctx = this.canvas.getContext('2d');
		const loader = ResourceLoader.create();
		loader.onLoaded(map => this.onResourceLoaderFirstLoaded(map))


	}
	onResourceLoaderFirstLoaded(map) {
		let image = map.get('background');
		// this.ctx.drawImage(
		// 	image,
		// 	0,0,image.width,image.height,
		// 	0,0,image.width,image.height
		// );
		// console.log(map.get('background').src)
		let bg = new BackGround(this.ctx,image);
		bg.draw();
	}
}