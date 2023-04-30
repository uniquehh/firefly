import methods from './methods';

export class Paging {
	_path = "";
	_page = 0;
	_total = 0;
	_limit = 20;
	_noMore = false;
	_load = false;
	_list = [];
	_params = {};
	_method = "";
	
	constructor(path,params = {},method){
		this._path = path
		this._params = params
		this._method = method?method:'get'
	}
	
  exec() {
		if(this._noMore)return;
		if(this._load)return;
		this._page++
		this._load = true
    let obj = { page: this._page, limit: this._limit }
		return methods.request(this._path, Object.assign(obj,this._params),this._method).then((res) => {
			this._load = false
      if(res.code==0){
        if (this._page==1) this._total = res.total;
				if(this._page>=1&&res.data.length<this._limit) this._noMore = true;
        this._list.push(...res.data);

				// console.log(this._list,88888)
				return res.data
      }
    })


	}
	
	reset(){
		this._page = 0
		this._noMore = false
		this._params = {}
		this._list = []
		this._total = 0
	}
	
}

export class Menu{
	tags = []
	checked = null
	
	constructor(options=[]){
		this.tags = options
		this.checked = options.find(item=>item.check==true)
	}
	
	handler(item){
		this.tags.find((obj)=>{
			if(obj.check)obj.check = false;
			if(obj.name==item.name){
				obj.check = true
				this.checked = obj
			}
		})
	}
}