const $ajax = window.util.ajax;
import {
    getHeaderContents,
    getFooterContents,
    getNavigationContents,
    getPagination
} from './layout.js';

const __online = {
    init() {
        getHeaderContents();
        getNavigationContents();
        getFooterContents();
        getPagination();
        $('._globalNavBar li').eq(9).addClass('active');
    },


};

$(function() {
    __online.init();
});
