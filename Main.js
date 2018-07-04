import {ResourceLoader} from './js/base/ResourceLoader.js'
import {Director} from './js/Director.js'
import {BackGround} from './js/runtime/BackGround.js'
import {DataStore} from './js/base/DataStore.js'

// 初始化游戏，游戏入口
export class Main {
	constructor() {
		this.canvas = document.querySelector('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.dataStore = DataStore.getInstance();
		const loader = ResourceLoader.create();
		loader.onLoaded(map => this.onResourceLoaderFirstLoaded(map))
	}

	onResourceLoaderFirstLoaded(map) {
		this.dataStore.ctx = this.ctx;
		this.dataStore.res = map;
		this.init();
	}

	init() {
		this.dataStore
			.put('bg',
				new BackGround(this.ctx,this.dataStore.res.get('background')));
		Director.getInstance().run();
	}
}