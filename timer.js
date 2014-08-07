/**
 * Created by Derty on 14-8-5.
 */

var timer = function () {
};

timer.prototype.print = function () {
    console.log(new Date().getTime());
}
/*
 @param cb 要定时执行的函数
 @param data 传递参数，不传参数，则留空
 @param sec 间隔时间

 eg:
 var aa = function()
 {
 console.log("-----------a,b-----------------");
 }

 var bb = function(str)
 {
 console.log("---------bbbbbb--------"+str);
 }

 var tim = new timer();
 var int = tim.setTimeout(aa, 5000);
 var int2 = tim.setTimeout(bb,"hello world", 1000);
 */
timer.prototype.setInterval = function (cb) {
    var self = this;
    var len = arguments.length;

    console.log("---------len--------" + len + "    " + JSON.stringify(arguments));

    if (len == 2) {
        var sec = arguments[1];

        if (typeof sec != "number" || typeof cb != "function") {
            throw arguments;
            return 0;
        }

        var int = setInterval(function () {
            cb();
        }, sec);

        return int;
    }
    else if (len == 3) {
        var str = arguments[1];
        var sec = arguments[2];

        if (typeof sec != "number" || typeof cb != "function") {
            throw arguments;
            return 0;
        }

        var int = setInterval(function () {
            cb(str);
        }, sec);

        return int;
    }
    else {
        throw arguments;
        return 0;
    }
}

/*
 @param interval timer.setInterval()的返回值
 */
timer.prototype.clearInterval = function (interval) {
    var self = this;
    clearInterval(interval);
}

/*
 @param cb 要定时执行的函数
 @param data 传递参数，不传参数，则留空
 @param sec 延迟时间

 eg:
 var aa = function()
 {
 console.log("-----------a,b-----------------");
 }

 var bb = function(str)
 {
 console.log("---------bbbbbb--------"+str);
 }

 var tim = new timer();
 var int = tim.setTimeout(aa, 5000);
 var int2 = tim.setTimeout(bb,"hello world", 1000);

 */
timer.prototype.setTimeout = function (cb) {
    var self = this;
    var len = arguments.length;

    console.log("---------len--------" + len + "    " + JSON.stringify(arguments));

    if (len == 2) {
        var sec = arguments[1];

        if (typeof sec != "number" || typeof cb != "function") {
            throw arguments;
            return 0;
        }

        var int = setTimeout(function () {
            cb();
        }, sec);

        return int;
    }

    else if (len == 3) {
        var str = arguments[1];
        var sec = arguments[2];

        if (typeof sec != "number" || typeof cb != "function") {
            throw arguments;
            return 0;
        }

        var int = setTimeout(function () {
            cb(str);
        }, sec);

        return int;
    }
    else {
        throw arguments;
        return 0;
    }
}

/*
 @param cb 要定时执行的函数
 @param data 传递参数，不传参数，则留空
 @param date执行的时间

 eg:
 var aa = function()
 {
 console.log("-----------a,b-----------------");
 }

 var bb = function(str)
 {
 console.log("---------bbbbbb--------"+str);
 }

 var tim = new timer();
 var int = tim.schedules(aa, "2014-8-6 21:09:21");
 var int2 = tim.schedules(bb,"hello world", "2014-8-6 21:09:21");

 */
timer.prototype.schedules = function (cb) {
    var self = this;
    var len = arguments.length;


    if (len == 2) {
        var schedules = arguments[1];
        var date = new Date(schedules).getTime();
        var now = new Date().getTime();
        var bet = date - now;
        if (bet < 0) {
            return false;
        }

        var int = self.setTimeout(cb, bet);
        return int;
    }

    else if (len == 3) {
        var schedules = arguments[2];
        var date = new Date(schedules).getTime();
        var now = new Date().getTime();
        var bet = date - now;
        if (bet < 0) {
            return false;
        }

        var data = arguments[1];
        var int = self.setTimeout(cb, data, bet);
        return int;
    }

    else {
        return false;
    }
}

/*
 eg
 var tim = new timer();
 tim.every("2014-8-6 15:57:21").minute(bb,"aaaaabbb");
 tim.every("2014-8-6 16:13:21").minute(bb,"aaaaa");
 tim.every().minute(bb,"aaaaa");
 tim.every().minute(aa);
 */
timer.prototype.every = function () {
    var self = this;
    var arg = arguments;

    return {
        day: function (cb) {
            var isSchedule = isEmptyObject(arg);
            var oneDay = 24 * 60 * 60 * 1000;

            if (isSchedule) {
                if (arguments.length == 1) {
                    self.setInterval(cb, oneDay);
                }

                else if (arguments.length == 2) {
                    var data = arguments[1];
                    self.setInterval(cb, data, oneDay);
                }

                else {
                    throw arguments;
                    return 0;
                }
            }

            else if (!isSchedule) {
                var schedules = arg[0];
                var date = new Date(schedules).getTime();
                var now = new Date().getTime();
                var bet = (date - now > 0) ? date - now : 1;

                if (arguments.length == 1) {
                    self.setTimeout(function () {
                        self.setInterval(cb, oneDay);
                    }, bet);
                }

                else if (arguments.length == 2) {
                    var data = arguments[1];
                    self.setTimeout(function () {
                        self.setInterval(cb, data, oneDay);
                    }, bet);
                }

                else {
                    throw arguments;
                    return 0;
                }
            }
        },

        hour: function (cb) {
            var oneHour = 60 * 60 * 1000;
            var isSchedule = isEmptyObject(arg);

            if (isSchedule) {
                if (arguments.length == 1) {
                    self.setInterval(cb, oneHour);
                }

                else if (arguments.length == 2) {
                    var data = arguments[1];
                    self.setInterval(cb, data, oneHour);
                }

                else {
                    throw arguments;
                    return 0;
                }
            }

            else if (!isSchedule) {
                var schedules = arg[0];
                var date = new Date(schedules).getTime();
                var now = new Date().getTime();
                var bet = (date - now > 0) ? date - now : 1;

                if (arguments.length == 1) {
                    self.setTimeout(function () {
                        self.setInterval(cb, oneHour);
                    }, bet);
                }

                else if (arguments.length == 2) {
                    var data = arguments[1];
                    self.setTimeout(function () {
                        self.setInterval(cb, data, oneHour);
                    }, bet);
                }

                else {
                    throw arguments;
                    return 0;
                }
            }
        },

        minute: function (cb) {
            var isSchedule = isEmptyObject(arg);
            var oneMinute = 60 * 1000;

            if (isSchedule) {
                if (arguments.length == 1) {
                    self.setInterval(cb, oneMinute);
                }

                else if (arguments.length == 2) {
                    var data = arguments[1];
                    self.setInterval(cb, data, oneMinute);
                }
            }
            else if (!isSchedule) {
                var schedules = arg[0];
                var date = new Date(schedules).getTime();
                var now = new Date().getTime();
                var bet = (date - now > 0) ? date - now : 1;

                if (arguments.length == 1) {
                    self.setTimeout(function () {
                        self.setInterval(cb, oneMinute);
                    }, bet);
                }

                else if (arguments.length == 2) {
                    var data = arguments[1];
                    self.setTimeout(function () {
                        self.setInterval(cb, data, oneMinute);
                    }, bet);
                }

                else {
                    throw arguments;
                    return 0;
                }
            }
        }
    };
}

//判断对象是否为空
function isEmptyObject(obj) {
    if (typeof obj == "object") {
        for (var n in obj) {
            return false
        }
        return true;
    }
    else {
        return false;
    }

}

module.exports = timer;