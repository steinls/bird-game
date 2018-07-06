import {DataStore} from '../base/DataStore.js'
import {Sprite} from '../base/Sprite.js'

export class StartBtn extends Sprite {
	constructor() {
		const img = Sprite.getImage('startButton');
		super({
			img,
			srcW:img.width,srcH:img.height,
			x:DataStore.getInstance().canvas.width/2-(img.width/3),y:DataStore.getInstance().canvas.height/2.2,w:img.width,h:img.width
		});
	}
}