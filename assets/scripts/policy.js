const $ajax = window.util.ajax;
import {
    getHeaderContents,
    getFooterContents,
    getNavigationContents,
    getPagination
} from './layout.js';

const __policy = {
    init() {
        getHeaderContents();
        getNavigationContents();
        getFooterContents();
        getPagination();
        $('._globalNavBar li').eq(8).addClass('active');
    },


};

$(function() {
    __policy.init();
});
