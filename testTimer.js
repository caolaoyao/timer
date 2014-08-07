/**
 * Created by Derty on 14-8-5.
 */
var timer = require("./timer");
var tim = new timer();
tim.print();

var aa = function()
{
    console.log("-----------a,b-----------------");
}

var bb = function(str)
{
    console.log("---------bbbbbb--------"+str);
}

tim.every("2014-8-6 15:57:21").minute(bb,"aaaaabbb");
tim.every("2014-8-6 16:13:21").minute(bb,"aaaaa");
//tim.every().minute(aa);

//var int = tim.setTimeout(aa, 5000);
//var int2 = tim.setTimeout(bb,"hello world", 1000);
//
//var int3 = tim.setInterval(aa, 6000);
//var int4 = tim.setInterval(bb, "from setInterval", 1000);
//
//tim.clearInterval(int3);
//tim.clearInterval(int4);
//
//var date = new Date("2014-8-6").getTime();
//console.log(date.getDay);
//
//var date2 = new Date("2014-8-6 21:09:21").getMinutes();
//console.log("date2---"+date2)
//
//var int5 = tim.schedules(aa, "2014-8-5 21:20:21");
//var int6 = tim.schedules(bb,"hello world", "2014-8-5 21:20:21");




