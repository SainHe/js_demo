const science = require('tpl/index/science.html');
const interflow = require('tpl/index/interflow.html');
const $ajax = window.util.ajax;
import {
    getHeaderContents,
    getFooterContents
} from './layout.js';
import Swiper from 'swiper';

const __scienceData = {
    columnLink: 'javascript:;',
    columnImg: '../../vendors/images/science-title.png',
    list: [{
        href: 'javascript:;',
        src: '../../vendors/images/science-img.jpg',
        name: '刘庆峰'
    }, {
        href: 'javascript:;',
        src: '../../vendors/images/science-img.jpg',
        name: '杨裕生'
    }, {
        href: 'javascript:;',
        src: '../../vendors/images/science-img.jpg',
        name: '林本坚'
    }, {
        href: 'javascript:;',
        src: '../../vendors/images/science-img.jpg',
        name: '韩启德'
    }, {
        href: 'javascript:;',
        src: '../../vendors/images/science-img.jpg',
        name: '高德利'
    }, {
        href: 'javascript:;',
        src: '../../vendors/images/science-img.jpg',
        name: '丁烈云'
    }]
}

const __interflowData = {
    columnLink: 'javascript:;',
    columnImg: '../../vendors/images/list-title-yqjl.png',
    list: [{
        href: 'javascript:;',
        title: '李伟：激发经济新动能根本在于改革开放',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '李伟：激发经济新动能根本在于改革开放',
        time: '2019-02-19'
    }]
}

const __index = {
    init() {
        // 轮播图
        let swiper = new Swiper('.swiper-container', {
            loop: true,
            //autoplay: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });

    },
    // 获取科技人物数据
    getScience() {
        $('.science').html(science(__scienceData));
    },
    // 获取舆情交流数据
    getInterflow() {
        $('.interflow').html(interflow(__interflowData));
    }
};

$(function() {
    getHeaderContents();
    getFooterContents();
    __index.init();
    __index.getScience();
    __index.getInterflow();
});
