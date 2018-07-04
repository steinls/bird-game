import {Sprite} from '../base/Sprite.js';
import {DataStore} from '../base/DataStore.js';

export class Pencil extends Sprite {
	constructor(img, top) {
		super({
			img,
			srcW:img.width,srcH:img.height,
			x:window.innerWidth,y:0,w:img.width,h:img.height
		});
		this.top = top;
	}

	draw() {
		this.x -= DataStore.getInstance().speed;
		this.ctx.draw({
			img,
			srcW:this.srcW,srcH:this.srcH,
			x:this.x,y:this.y,w:this.w,h:this.h
		});
	}
}