import {Sprite} from '../base/Sprite.js';
import {DataStore} from '../base/DataStore.js'

// 移动的陆地类
export class Land extends Sprite {
	constructor() {
		const img = Sprite.getImage('land');
		super({
			img,
			srcW:img.width,
			srcH:img.height,
			x:0,
			y:(DataStore.getInstance().canvas.height-img.height),
			w:img.width,
			h:img.height
		});
		this.landx = this.x;
		this.speed = 2;
	}

	draw() {
		this.landx -= this.speed;
		if (this.landx<(DataStore.getInstance().canvas.width-this.img.width)) {
			this.landx = 0;
		}
		this.ctx.drawImage(
			this.img,
			this.srcX,this.srcY,this.srcW,this.srcH,
			this.landx,this.y,this.w,this.h
		);
	}
}