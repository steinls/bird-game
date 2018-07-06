import {DataStore} from '../base/DataStore.js'
import {Pencil} from './Pencil.js'
import {Sprite} from '../base/Sprite.js'

export class BottomPencil extends Pencil {
	constructor(top) {
		const img = Sprite.getImage('pencilDown');
		super(img, top);
		this.gap = (DataStore.getInstance().canvas.width)/3.4*(Math.random()*1+1);
	}

	draw() {
		this.y = this.top + this.gap;
		super.draw();
	}
}