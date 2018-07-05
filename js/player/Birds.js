import {Sprite} from '../base/Sprite.js'


export class Birds extends Sprite {
	constructor() {
		const img = Sprite.getImage('birds');
		super({
			img,
			srcW:img.width,srcH:img.height,
			w:img.width,h:img.height
		});

		// es2018对象的可以用...展开的，这里就先规划好吧
		this.position = {
			x:window.innerWidth/4,
			y:window.innerHeight/2,
			w:32,
			h:24
		};
		this.clips = [
			{
				srcX:8,
				srcY:11,
				srcW:32,
				srcH:24
			},
			{
				srcX:60,
				srcY:11,
				srcW:32,
				srcH:24
			},
			{
				srcX:113,
				srcY:11,
				srcW:32,
				srcH:24
			}
		];
		this.count = 0;
		this.birdsSpeed = 0.3;
		this.status = 0;
	}

	draw() {
		this.count = (this.count+this.birdsSpeed)%3;
		this.status = Math.floor(this.count);
		let config = Object.assign({img:this.img},this.clips[this.status],this.position);
		// console.log(config)
		super.draw(config);
	}
}