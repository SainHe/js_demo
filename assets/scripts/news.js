const $ajax = window.util.ajax;
import {
    getHeaderContents,
    getFooterContents,
    getNavigationContents,
    getPagination
} from './layout.js';

const __news = {
    init() {
        getHeaderContents();
        getNavigationContents();
        getFooterContents();
        getPagination();
        $('._globalNavBar li').eq(1).addClass('active');
    },


};

$(function() {
    __news.init();
});
