import {ResourceLoader} from './js/base/ResourceLoader.js';
import {Director} from './js/Director.js';
import {BackGround} from './js/runtime/BackGround.js';
import {DataStore} from './js/base/DataStore.js';
import {Land} from './js/runtime/Land.js';
import {Birds} from './js/player/Birds.js';

// 初始化游戏，游戏入口
export class Main {
	constructor() {
		this.canvas = document.querySelector('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.dataStore = DataStore.getInstance();
		this.director = Director.getInstance();
		const loader = ResourceLoader.create();
		loader.onLoaded(map => this.onResourceLoaderFirstLoaded(map))
	}

	onResourceLoaderFirstLoaded(map) {
		this.dataStore.ctx = this.ctx;
		this.dataStore.res = map;
		this.dataStore.speed = 2;
		this.init();
	}

	init() {
		// this.director.gameOver = true;
		this.dataStore
			.put('pencils',[])
			.put('bg',BackGround)
			.put('land',Land)
			.put('birds',Birds);
		this.director.createPencil();
		this.registerEven();
		this.director.run();
	}

	registerEven() {
		this.canvas.addEventListener('touchstart', e => {
			e.preventDefault();
			if(!this.director.gameOver){
				this.dataStore.get('birds').flyOne();
			}else{
				console.log('game over');
			}
		});
	}
}