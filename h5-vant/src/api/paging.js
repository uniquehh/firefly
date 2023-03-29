import methods from './methods';

export class Paging {
	_path = "";
	_page = 0;
	_pageSize = 10;
	_noMore = false;
	_list = [];
	_params = {};
	
	constructor(path,params = {}){
		this._path = path
		this._params = params
	}
	
  getData() {
    if(this._noMore)return;
    this._page++
    let obj = { page: this._page, pageSize: this._pageSize }
    return methods.request(this._path, Object.assign(obj, this._params), "get").then((res) => {
      // if(res.success){
      //   if (res.data.rows.length < this._pageSize) this._noMore = true;
      //   this._list.push(...res.data.rows);
      // }
      console.log(res,7535777777)
    })


		// return new Promise((rs,rj)=>{
		// 	if(this._noMore)return;
		// 	this._page++
		// 	methods.request(this._path,
    //     Object.assign({ page: this._page, pageSize: this._pageSize }, this._params),
    //   "get",
		// 	(res)=>{
		// 		if(res.success){
		// 			if (res.data.rows.length < this._pageSize) this._noMore = true;
		// 			this._list.push(...res.data.rows);
		// 		}
		// 	})
		// })
	}
	
	reset(){
		this._page = 0
		this._noMore = false
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