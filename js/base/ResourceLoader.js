import {Resources} from './Resources.js';

// 在图片加载完成后，启动游戏
export class ResourceLoader {
	constructor() {
		this.map = new Map(Resources);
		for (let [key, value] of this.map) {
			const image = new Image();
			image.src = value;
			this.map.set(key, image);
		}
	}

	onLoaded(callback) {
		let loadedCount = 0;
		for (let value of this.map.values()) {
			value.onload = () => {
				loadedCount++;
				if (loadedCount >= this.map.size) {
					callback(this.map);
				}
			}
		}
	}

	static create() {
		return new ResourceLoader();
	}
}