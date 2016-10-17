/**
 * Created by cattle on 2016/9/21 0021.
 *
 */

require.config({
    paths:{
        canJQuery : 'JS/canjs.com-2.3.27/can.jquery.min',
        canStache : 'JS/canjs.com-2.3.27/can.stache'
    }
});
require(['canJQuery', 'canStache'], function(){

    //can.stache template
    can.Component.extend({
        //tag：组件的标签元素节点名称,并且被创建
        tag : 'hello-world',
        //template：组件的模板呈现为HTML
        template : can.stache('{{#if visible}}{{msg}} {{else}}click me{{/if}}'),
        //viewModel：组件的视图模型定义了一个can.Map是用来渲染组件的模板，Map的属性通常绑定定义的元素
        //默认情况下，每个属性的值都是面向父视图模型里面定制的元素，并且添加到viewModel对象上。
        viewModel : {
            visible : false,
            msg : 'can.component test!'3
        },
        //events：组件的事件对象用于监听与视图绑定的事件
        //也可以绑定插入或删除页面DOM事件
        events : {
            click : function(){
                this.viewModel.attr('visible', !this.viewModel.attr('visible') );
            }
        },
        //Helper：辅助函数，比如对组建数据进行过滤操作...
        Helper:{

        }
    });
    //创建一个组件,标签名必须对应
    var template = can.stache('<hello-world></hello-world>');
    //将模版添加到页面当中
    $('body').append(template());


    //can.mustache template
    can.Component.extend({
        tag: 'my-tag',
        template: '<h1>{{msg}}</h1>'
    });

    var template2 = can.mustache('<my-tag msg="hello CanJS!"/>');
    var frag = template2({
        msg: 'Hi, CanJS!'
    });
    $('body').append(frag);



})


