import {Sprite} from '../base/Sprite.js'


export class Birds extends Sprite {
	constructor() {
		const img = Sprite.getImage('birds');
		super({
			img,
			srcW:img.width,srcH:img.height,
			x:window.innerWidth/4,y:window.innerHeight/2,w:32,h:24
		});
		
		// es2018对象的可以用...展开的，这里就先规划好吧
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
		this.birdsSpeed = 0.2;
		this.status = 0;
		this.time = 0;
	}

	draw() {
		// 小鸟挥动翅膀
		this.count = (this.count+this.birdsSpeed)%3;
		this.status = Math.floor(this.count);
		for(let key in this.clips[this.status]){
			this[key] = this.clips[this.status][key];
		}

		//小鸟重力加速度模拟
		const g = 0.098/6;
		const offsetY = 38;
		this.y += (g * this.time *(this.time - offsetY))/2;
		this.time++;

		// console.log(config)
		super.draw();
	}

	// 小鸟飞一下
	flyOne() {
		this.time = 0;
	}
}