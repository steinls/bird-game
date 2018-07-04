// 背景
import {Sprite} from '../base/Sprite.js'

export class BackGround extends Sprite{
	constructor(ctx,img){
		super({
			ctx,
			img,
			srcW:img.width,
			srcH:img.height,
			w:window.innerWidth,
			h:window.innerHeight
		});
		console.log(this.srcX)
	}
}