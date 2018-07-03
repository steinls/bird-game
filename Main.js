import {ResourceLoader} from './js/base/ResourceLoader.js'

// 初始化游戏，游戏入口
export class Main {
	constructor() {
		new ResourceLoader();
		console.log('main 执行了')
	}
}