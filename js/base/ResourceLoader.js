import {Resources} from './Resources.js'

// 在图片加载完成后，启动游戏
export class ResourceLoader {
	constructor() {
		this.map = new map(Resources)
	}
}