import {Sprite} from '../base/Sprite.js'

export class StartBtn extends Sprite {
	constructor() {
		const img = Sprite.getImage('startButton');
		super({
			img,
			srcW:img.width,srcH:img.height,
			x:window.innerWidth/2-(img.width/3),y:innerHeight/2.2,w:img.width,h:img.width
		});
	}
}