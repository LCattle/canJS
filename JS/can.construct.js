/**
 * Created by cattle on 2016/9/21 0021.
 */

require.config({
    paths:{
        canJQuery : 'JS/canjs.com-2.3.27/can.jquery.min'
    }
});
require(['canJQuery'], function(){

    //can.Construct 轻松解决了原型继承且不用担心构造的所有细节
    //可以创建一个可继承的构造函数
    var CC = can.Construct.extend(
        {
            legs : 4
        },
        {
            init: function(sound){
                this.sound = sound;
            },
            speak: function(){
                console.log(this.sound);
            }
        }
    );

    //可以通过调用构造函数的实例的属性和方法
    //当一个构造函数创建时，也就调用了init（）方法
    var cc = new CC('hello canJS!');
    cc.speak();

    //官网也提供了两个NB的插件
    //can.construct.super.js  继承插件
    //can.construct.proxy.js  创建一个静态函数来设置一个实例构造函数的值


})