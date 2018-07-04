// 背景
import {Sprite} from '../base/Sprite.js'

export class BackGround extends Sprite{
	constructor(){
		const img = Sprite.getImage('background');
		super({
			img,
			srcW:img.width,
			srcH:img.height,
			w:window.innerWidth,
			h:window.innerHeight
		});
	}
}