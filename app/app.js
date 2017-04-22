
angular.module('myapp', ['ngRoute','ngAnimate'])
	.config(route)                               //路由配置
    .controller('mainctrl',mainctrl)             //控制器
    .controller('luyou',luyou)                   
    .animation('.fadeComment',fadeComment)		 //评论添加淡入效果
    .directive('showBanner',showBanner)          //导航手风琴效果
    .directive('addComment',addComment);	     //导航下拉效果
    
    