import {Sprite} from '../base/Sprite.js'


export class Birds extends Sprite {
	constructor() {
		const img = Sprite.getImage('birds');
		super({
			img,
			srcW:img.width,srcH:img.height,
			w:img.width,h:img.height
		});
	}

}