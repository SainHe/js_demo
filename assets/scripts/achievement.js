const $ajax = window.util.ajax;
import {
    getHeaderContents,
    getFooterContents,
    getNavigationContents,
    getPagination
} from './layout.js';

const __achievement = {
    init() {
        getHeaderContents();
        getNavigationContents();
        getFooterContents();
        getPagination();
        $('._globalNavBar li').eq(2).addClass('active');
    },
};

$(function() {
    __achievement.init();
});
