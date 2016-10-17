/**
 * Created by cattle on 2016/9/22 0022.
 */

require.config({
    paths:{
        canJQuery : 'JS/canjs.com-2.3.27/can.jquery.min'
    }
});
require(['canJQuery'], function(){

    //can.Control  可以快速组织，执行，状态控制和事件绑定
    //can.Control.extend(staticProperties{object}, instanceProperties{object}) parameters:
    //staticProperties{object} : 初始化默认的属性和事件
    //instanceProperties{object} : 绑定的元素或者事件或者输出的内容
    var CC = can.Control.extend({

        defaults: {
            listerType: 'mouseover'
        }

    },{
        init: function(ele, options){
            //alert('hello can control!');
        },
        '.A {listerType}': function(){
            alert('A');
        },
        '.B click': function(){
            alert('B');
        }
    });

    //实例化一个控制器
    //new can.Control(element{HTMLElement | NodeList | CSSSelectorString}, options{object}) parameters:
    //element: 实例化绑定的元素
    //options: 要覆盖掉默认的属性
    new CC('body', {listerType:'click'});

    //can.Control  生命周期
    //1.extend 一个控制器
    var test = can.Control.extend({
        defaults: {

        }
    }, {
        init: function(){},
        'body click': function(){}
    });

    //2.new 一个控制器的实例
    var a = new test('body', {});

    //3.事件的监听, 如：body click: fn()
    //4.销毁一个控制器
    //a.destroy(): 销毁一个控制器，但不会删除页面的元素
    //$(body).remove(): 销毁一个控制器，且页面绑定的元素被删除
    a.destroy()
    $('body').remove();



    //on()
    //在重新绑定控制器的处理程序，监听一个模型的变化





});
