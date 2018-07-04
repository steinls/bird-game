import {Pencil} from './Pencil.js'
import {Sprite} from '../base/Sprite.js'

export class BottomPencil extends Pencil {
	constructor(top) {
		const img = Sprite.getImage('pencilDown');
		super(img, top);
	}

	draw() {
		let gap = window.innerHeight/5;
		this.y = this.top + this.gap;
		super().draw();
	}
}