/**
 * Created by cattle on 2016/9/22 0022.
 */
require.config({
    paths:{
        canJQuery : 'JS/canjs.com-2.3.27/can.jquery.min'
    }
});
require(['canJQuery'], function(){

    //can.List 数组对象
    var lists = new can.List(['A', 'B', 'C']);

    //can.List 监听事件
    //使用bind关键字
    //eventsName : 事件的名字,如:change, add, set, remove
   /* lists.bind(eventsName, function(){

    })*/

    //can.List 常用方法
    //以上面创建的lists为例

    //lists.attr(index, data)
    //attr 有两个参数，第一个参数为数组的下标，第二个参数为要添加的肉容
    //如没有传第二个参数，则表示获取lists里面对应下标的数据; 如果没有传入参数，则表示获到lists数组里面全部的数据

    //list.concat(...age)
    //concat（） 合并多个集合
    var newLists = lists.concat(
        'AA',
        ['BB', 'CC'],
        new can.List(['a', 'b']),
        {first:'first'}
    )
    newLists.attr();


    //list.each(fn(ele, index))
    //ele: 列表中的项
    //index: 当前项的下标
    //每执循环一次，函数将调用一次，返回false将退出循环
    var i = 0;
    lists = new can.List([1, 100, 1000]);
    lists.each(function(ele, i){
        i += ele;
        console.log('list.each: ' + i);
    });


    //list.filter(fn(ele, index, list)): 过滤数据返回过滤后的数据
    //ele: 列表中的项
    //index: 当前项的下标
    //list: 返回新的列表
    lists = new can.List([0, 1, 2, 3]);
    var items = lists.filter(function(ele, i, list){
        return ele < 3;
    });
    items.each(function(ele, index){
        console.log('filtered: ' + ele);
    });


    //list.forEach(fn(ele, index, list)): 和each()一样(暂时没有发现有什么区别)
    //
    lists.forEach(function(ele, index, lists){
        lists.attr(index, ele * ele)
    });

    console.log(lists.attr());


    //lists.indexOf(string): 在lists列表中查找，如果有返回该元素的下标，如果没有则返回-1
    //string: 要查找的字符串
    lists = new can.List(['AA', 'BB', 'CC']);
    var n = lists.indexOf('BB');
    if(n < 0){
        console.log('indexOf查找不到.');
    }else{
        console.log('indexOf找到了.');
    }

    //lists.join(string): 添加把列表转换成字符串的分隔符，显示在所有的项中间
    //添加成功后，返回一个字符串而不是一个数组或者列表
    var newL = lists.join('- ');
    console.log(newL);

    //lists.map(fn(ele, index, list), context): 对原本数组的操作并返回新的数组
    //也可以理解为这是一个高级过滤器，但是比filter的操作要多一些
    var itemList = new can.List(['BB', 'CC', 'AA']);
    var newItemList = itemList.map(function(item, index, listReference){
        var reslut;
        switch (item){
            case 'BB':
            {
                reslut = 'BB2';
                break;
            }
            case 'CC':
            {
                reslut = 'CC2';
                break;
            }
        }
        return reslut;
    });

    console.log('newItemList.attr: ' + newItemList);
    console.log( newItemList);


    //lists.pop() : 从一个列表当中反向删除列表中的项，一次只删除一个项
    //删除完成之后，返回删除的项
    //如果列表为空，则返回undefined
    console.log(itemList.attr());
    console.log(itemList.pop())
    console.log(itemList.pop())
    console.log(itemList.pop())
    console.log(itemList.pop())


    //lists.push(): 添加新的元素到列表当中，并返回添加后的列表长度
    //可以同时push('a', 'b')项到列表中
    console.log('push之后列表的长度:' + itemList.push('A'));
    console.log('push之后列表的长度:' + itemList.push('AA'));
    console.log('push之后列表的长度:' + itemList.push('AAA'));
    console.log('push之后列表的长度:' + itemList.push('AAA', 'bbb'));
    console.log('push到itemList之后的项：' + itemList.attr());


    //lists.replace(): 替换列表中所有的项
    //同样也可以添加事件监听
    var list2 = new can.List(['b', 'a']);
    console.log('替换前:' + list2.attr());
    var list3 = new can.List(['1', '2']);
    list2.replace(list3);
    console.log('替换后:' + list2.attr());
    //事件监听：无论是添加/删除/设置它都会执行remove/add/set事件类型
    //how: 执行什么操作
    //newVals: 新的值
    //oldVals: 旧的值
    //详情可以查看官方文档
    list2.bind('change', function(ev, index, how, newVals, oldVals){

    })

    //lists.reverse(): 扭转一个列表的顺序，从后往前显示,并且它的内存地址是一样的，所以是相等的
    //它同样会触发相应的事件：add/remove/delete/update
    var list5 = list2.reverse();
    console.log('扭转后的list2:' + list5.attr());


    //lists.shift(): 删除列表中的一项，从前往后删除与pop不同，pop是从后往前面删除
    //如果列表为空，则返回undefined
    list2.shift();
    console.log('shift后的list2:' + list2.attr());

    //lists.slice(star, end): 复制一个列表
    //star: 从哪个下标开始复制
    //end: 从哪个下标结束复制
    //返回新的列表
    //如果参数为空，则复制整个列表，但是新列表的内存地址与旧列表的内存地址不同，所以不相等
    var list6 = new can.List(['A1', 'B2', 'C3', 'D4', 'E5']);
    var list7 = list6.slice(1, 4);
    var list8 = list6.slice();
    console.log('slice新列表为：' + list7.attr());
    console.log('slice整个新列表为：' + list8.attr());
    console.log('内存地址不同，所以不相等：' + list8 === list6);


    //lists.splice(index, howMay, newElement): 删除或者添加元素到列表中
    //index: 从哪里开如删除或者插入元素
    //howMay: 从添加的下标开始，后面要删除多少个项,如果这个参数没有指定，则只删除开始位置对应的项，并且如果有多个要添加的项，则只添加所有项的最后一个项(不会删除原有列表中的项)
    //要添加到列表中的项,可以一次添加多个
    var listA = new can.List(['AB', 'BC', 'CD', 'DE', 'EF']);
    console.log('执行splice前:' + listA.attr());
    listA.splice(2, 'CBBB', 'DDD')
    console.log('执行splice后:' + listA.attr());
    //list.splice执行时也可以监听事件:
    //add/remove/change/length  这几个事件都可以监听，详情看官方文档
    listA.bind('add', function(ev, newVlas, where){

    })


    //lists.unshift(): 添加新的项到列表的开头
    var listB = new can.List(['ABC']);
    console.log('执行unsift前:' + listB.attr())
    listB.unshift('DEFG');
    console.log('执行unsift后:' + listB.attr());
    //如果要合并数组：
    var names = ['HIJK', 'ppp'];
    console.log('合并数组前:' + listB.attr());
    listB.unshift.apply(listB, names);
    console.log('合并数组后:' + listB.attr());
    //执行unshift()同样也可以监听事件
    //change/add/length
    listB.bind('change', function(ele, index){

    });

})