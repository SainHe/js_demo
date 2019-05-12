const header = require("tpl/layout/header.html");
const navigation = require("tpl/layout/nav.html");
const footer = require("tpl/layout/footer.html");
const pagination = require("tpl/layout/pagination.html");

const __headerData = {
    title: '智库网',
    src: '../../vendors/images/logo.png'
};
const __footerData = {
    kxTitle: '中国科协技术学会',
    kxSrc: '../../vendors/images/footer-kx.png',
    zkTitle: '科协智库网',
    zkSrc: '../../vendors/images/footer-logo.png',
    content: '中国科学技术协会版权所有 京icp 备 10216604 号-4 海淀分局备案 1101084647'
};
// 头部
const __header = {
    init() {
        $('.l-header').html(header(__headerData));
    }
};
// 导航
const __navigation = {
    init() {
        $('.l-nav').html(navigation(null));
        // 下拉菜单
        $('.nav-personage').on('mouseenter',function(){
            if (!$(this).is(":animated")){
                $(this).find('.nav-second').slideDown(200);
            }
        }).on('mouseleave',function(){
            $(this).find('.nav-second').slideUp(200);
        })
    }
};
// 分页
const __pagination = {
    init() {
        $('.m-pagination').html(pagination(null));
    }
};
// 页脚
const __footer = {
    init() {
        $('.l-footer').html(footer(__footerData));
    }
};

export function getHeaderContents(){
    __header.init();
}
export function getNavigationContents(){
    __navigation.init();
}
export function getFooterContents(){
    __footer.init();
}
export function getPagination(){
    __pagination.init();
}
