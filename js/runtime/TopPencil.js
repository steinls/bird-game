import {Pencil} from './Pencil.js'
import {Sprite} from '../base/Sprite.js'


export class TopPencil extends Pencil{
	constructor(top) {
		const img = Sprite.getImage('pencilUp');
		super(img, top);
	}

	draw() {
		this.y = this.top - this.h;
		super.draw();
	}
}