
import {DataStore} from './base/DataStore.js';

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

	run() {
		const bgSprite = this.dataStore.get('bg');
		bgSprite.draw();
	}
}