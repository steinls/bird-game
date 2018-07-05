import {DataStore} from './DataStore.js';

// 精灵的基类，包含精灵的基本功能
export class Sprite {
	constructor({
		img=null,
		srcX=0,srcY=0,srcW=0,srcH=0,
		x=0,y=0,h=0,w=0
	}={}) {
		this.dataStore = DataStore.getInstance();
		this.ctx = this.dataStore.ctx;
		this.img = img;
		this.srcX = srcX;
		this.srcY = srcY;
		this.srcW = srcW;
		this.srcH = srcH;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	// 体积（边界）
	setVolume() {
		this.volume = {
			left:this.x,
			right:this.x+this.w,
			top:this.y,
			bottom:this.y+this.h
		};
	};

	// 检测碰撞
	isStrike(steelX) {
		let s = false;
		if(this.volume.top < steelX.volume.bottom &&
            this.volume.bottom > steelX.volume.top &&
            this.volume.right > steelX.volume.left &&
            this.volume.left < steelX.volume.right
        ) {
			s = true;
		}
		return s;
	};

	static getImage(key) {
		return DataStore.getInstance().res.get(key);
	}

	/**
     * img 传入Image对象
     * srcX 要剪裁的起始X坐标
     * srcY 要剪裁的起始Y坐标
     * srcW 剪裁的宽度
     * srcH 剪裁的高度
     * x 放置的x坐标
     * y 放置的y坐标
     * width 要使用的宽度
     * height 要使用的高度
     */
	draw({
		img=this.img,
		srcX=this.srcX,srcY=this.srcY,srcW=this.srcW,srcH=this.srcH,
		x=this.x,y=this.y,w=this.w,h=this.h
	}={}) {
		this.ctx.drawImage(
			img,
			srcX,srcY,srcW,srcH,
			x,y,w,h
		);
	}
}