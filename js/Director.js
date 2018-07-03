// 导演类，负责游戏逻辑
export class Director {
	constructor() {
		console.log('导演类，初始化。。')
	}
	//单例模式，只允许一个导演存在
	static getInstance() {
		if(!Director.instance){
			Director.instance = new Director();
		}
		return Director.instance;
	}
}