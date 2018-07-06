import {Sprite} from '../base/Sprite.js'
import {DataStore} from '../base/DataStore.js'

export class ScorePanel extends Sprite {
	constructor() {
		super({
			w:50,
			h:50
		});
		this.ctx = DataStore.getInstance().ctx;
		this.score = 0;
		this.color = 'red';
		this.fontSize = 40;
		this.lock = true;
	}

	draw() {
		this.ctx.font = this.fontSize+"px Georgia";
		this.ctx.fillStyle = this.color;
		this.ctx.fillText('score:'+this.score,this.w,this.h);
	}
}