;function dialog(obj){
    this.obj = obj;
    this.width = obj.width;
    this.height = obj.height;
    this.btn = obj.btn;
    this.init();
}
dialog.prototype = {
    constructor:dialog,
    init:function(){
        var Div = document.createElement('div');
        Div.className = 'dialog';
        console.log(this.obj);
        Div.innerHTML = `
                        <div><h4>${this.obj.tit}</h4><button>${this.obj.btn[0]}</button><button>${this.obj.btn[1]}</button></div>
                        `;
        document.body.appendChild( Div );
        var btns = Div.getElementsByTagName('button');
        var that = this;
        btns[0].onclick = function(){
            that.obj.True();
        }
        btns[1].onclick = function(){
            that.obj.False();
        }
    }
}




