const header = require("tpl/layout/header.html");
const data = require("tpl/index/data.html");
const list = require("tpl/index/list.html");
const $ajax = window.util.ajax;

const __data = {
    title: '测试',
    content: '数据1'
};
const __list = [{
        title: '标题111',
        content: '内容111内容111内容111内容111内容111内容111'
    },
    {
        title: '标题222',
        content: '内容222内容222内容222内容222内容222内容222'
    },
    {
        title: '标题333',
        content: '内容333内容333内容333内容333内容333内容333'
    },
];

const __index = {
    init() {
        console.log(__list);
        $('._header').html(header());
        $('._data').html(data(__data));
        $('._list').html(list(__list));
    }
};

$(function() {
    __index.init();
});
