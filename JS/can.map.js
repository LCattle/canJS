/**
 * Created by cattle on 2016/9/22 0022.
 */
require.config({
    paths:{
        canJQuery : 'JS/canjs.com-2.3.27/can.jquery.min'
    }
});
require(['canJQuery'], function(){

    var maps = new can.Map({
        a : 'A',
        b : 'B',
        c : 'C'
    });

    //maps.bind(evType, fn): 可以绑定监听事件add/remove/set
    //fn(ev, attr, how, newVal, oldVal){}
    //ev: 事件对象
    //attr: 哪个属性发生变化
    //how: 监听的事件类型
    //newVal: 改变后的值,如果没有定义，则为undefined
    //oldVal: 改变前的属性值，如果事件为添加，则为undefined
    maps.bind('change', function(ev, attr, how, newVal, oldVal){
        console.log('change 事件监听： ' + ev + '-' + attr + '-' + how + '-' + newVal + '-' + oldVal);
    });



    //maps.attr(): 可以应用多个场景
    console.log('maps 对象初始化属性：' + eachMap(maps));
    //maps.attr(): 打印一个Map对象的所有属性
    console.log('maps 对象的所有属性: ' + eachMap(maps));
    //maps.attr(key): 根据key来获取Map对象的里面对应的属性值
    console.log('maps 对象a的属性值: ' + maps.attr('a'));
    //maps.attr(key, value): 添加属性到Map对象上面或者也可以是设置(set)属性
    //添回属性
    maps.attr('d', 'D');
    console.log('maps 对象添加属性之后:' + eachMap(maps));
    //设置和和并属性
    maps.attr({
        d : '123',
        e : 'E'
    }, true);
    console.log('maps 对象设置和和并属性之后:' + eachMap(maps));


    //别的类型的属性获取
    var maps2 = new can.Map({
        'a.a' : 'A.A',
        'b.b' : 'B.B'
    });
    console.log('别的类型maps2 数据初始化: ' + eachMap(maps2));
    //设置属性并且全并属性
    maps2.attr({
        'b.b' : 'B.B.B',
        'c.c' : 'C.C',
        'names.a' : 'names.a'
    });
    console.log('别的类型设置属性和合并属性之后: ' + eachMap(maps2));

    //获取单个属性
    console.log('单个获取别的类型对象属性: ' + maps2.attr('b\.b'));




    //maps.compute(): Map对象利用compute()可以对Map对象里面的属性进行事件监听
    maps = new can.Map({
        a : 'A',
        b : 'B',
        c : 'C'
    });
    var a = maps.compute('a');
    a.bind('change', function(ev, newVal, oldVal){
        console.log('对maps对象里面的a属性进行事件监听： ' + ev + '-' + newVal + '-' + oldVal);
    });
    console.log('打印a的值:' + a());
    maps.attr({
      a : '监听a的值'
    }, true);
    console.log('监听set之后a的值:' + a());
    a('监听a的值');
    console.log('同上-监听set之后a的值:' + a());



    //maps.removeAttr(string): 删除掉Map对象中的属性
    //string: 要删除的属性名
    maps = new can.Map({
        a : 'A',
        b : 'B',
        c : 'C'
    });
    console.log('remove前的maps对象属性：' + eachMap(maps));
    maps.removeAttr('a');
    console.log('remove后的maps对象属性: ' + eachMap(maps));


    //maps.serialize(): 把一个Map对象序列化成一个JSON对象
    maps = new can.Map({
        a : 'A',
        b : 'B',
        c : 'C'
    });
    var mapJson = maps.serialize();
    console.log('序列化后的maps对象:' + mapJson.a);



    //maps.unbind(eventType, fn()): 对一个Map对象进行事件解绑
    maps = new can.Map({
        a : 'A',
        b : 'B',
        c : 'C'
    });
    //对Map对象进行事件监听
    maps.bind('change', function(ev, attr, how, newVal, oldVal){

    });
    //对Map对象进行事件解绑
    maps.unbind('change', function(){});


    //maps.each(value, key): 遍历Map对象的值
    //value: Map对象中属性的值
    //key: Map对象中属性的键
    function eachMap(Map){
        var mapVal = '';
        Map.each(function(value, key){
            mapVal += key + ':' + value + ',  '
        });
        return mapVal.substring(0, mapVal.lastIndexOf(',')) || null;
    }

})