var APP_PATH 		= '/Jquery/router/' 		//项目根目录
var	TEMPLATE_PATH	= './template'     		//HTML PATH

var PAGE_404 = APP_PATH + 'template/404.html';

var _Router = {
    hashChange:function(){
        var g, l, a,b, tpl = '/', ul;
        l = location.hash, location.hash = l.toLowerCase(), b = l.substring(1).split("?")[0],g=b.substring(b.length-1)=='/'?b.substring(0,b.length-1):b, a = g.split('/');
        typeof l=='undefined'  || l.length<1 || typeof g =='undefined' || g.length<1 ? location.href = APP_PATH + '#' : '';
        for (var i = 0; i < a.length - 1; i++) {tpl += a[i] + '/'}
		tpl = tpl == '/' ? '' : tpl + a[a.length - 1] + '.htm'
		ul = TEMPLATE_PATH + tpl;
        $.get(ul).then(function(r){$("#viewContent").html(r)},function(a,b,c){a.status==404?location.href=PAGE_404:''})
    },
	explode:function () {
        window.addEventListener('hashchange', this.hashChange.bind(this));
    },
	init:function(){
		this.hashChange();
		this.explode();
	}
}

