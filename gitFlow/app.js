/**
 * @author ZenYu
 * @time 2016/11/24.
 */
'use strict';
let request = require('request');
let db = require('./dbBase');
let config = require('./config');
let bagpipe = require('bagpipe');


request('http://www.baidu.com?keyword=zenofyu masters', function(err, res) {
    if (err) throw err;
    res = res.body;
    let j = JSON.parse(res), b = j.b, c = j.c;
    console.log(b, c, d);
});
