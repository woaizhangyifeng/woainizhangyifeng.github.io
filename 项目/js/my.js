//婊氭粴灞�
(function(){
	$(function() {
        $('#dowebok').fullpage({
            verticalCentered: true,//内容垂直居中
            sectionsColor: ['#1bbc9b'],
            anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],//定义锚连接，默认为[]。有了锚链接，用户就可以快速打开定位到某一页面 
            //注意定义锚链接的时候，值不要和页面中任意的id或name相同，尤其是在IE浏览器下。而且定义时不需要要加# 
            navigation: true,
            menu: '#menu',//绑定菜单,设定的相关属性与anchors的值对应后，菜单可以控制滚动
            resize: true,//字体随着窗口缩放而缩放
            continuousVertical: true,
        });
		
    });
    (function(){	
        $(function(){	
            $('.banner').bomb({
            });
        });
    
    })();
})();