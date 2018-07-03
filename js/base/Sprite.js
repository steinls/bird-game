// 精灵的基类，包含精灵的基本功能
export class Sprite {
	constructor({
		ctx=null,
		img=null,
		srcX=0,srcY=0,srcW=0,srcH=0,
		x=0,y=0,h=0,w=0
	}={}) {
		this.ctx = ctx;
		this.img = img;
		this.srcX = srcX;
		console.log(this.srcX)
		this.srcY = srcY;
		this.srcW = srcW;
		this.srcH = srcH;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
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
	draw() {
		this.ctx.drawImage(
			this.img,
			this.srcX,this.srcY,this.srcW,this.srcH,
			this.x,this.y,this.w,this.h
		);
	}
}