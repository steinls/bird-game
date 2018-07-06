import {Sprite} from '../base/Sprite.js';
import {DataStore} from '../base/DataStore.js';

export class Pencil extends Sprite {
	constructor(img, top) {
		super({
			img,
			srcW:img.width,srcH:img.height,
			x:DataStore.getInstance().canvas.width,y:0,w:img.width,h:img.height
		});
		this.top = top;
		this.speed = 2;
		this.setVolume();
	}

	draw() {
		this.setVolume();
		
		this.x -= this.speed;
		this.ctx.drawImage(
			this.img,
			this.srcX,this.srcY,this.srcW,this.srcH,
			this.x,this.y,this.w,this.h
		);
	}
}