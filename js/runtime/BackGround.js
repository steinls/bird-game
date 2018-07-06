import {DataStore} from '../base/DataStore.js'
// 背景
import {Sprite} from '../base/Sprite.js'

export class BackGround extends Sprite{
	constructor(){
		const img = Sprite.getImage('background');
		super({
			img,
			srcW:img.width,
			srcH:img.height,
			w:DataStore.getInstance().canvas.width,
			h:DataStore.getInstance().canvas.height
		});
	}
}