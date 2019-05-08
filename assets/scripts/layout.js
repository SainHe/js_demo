const header = require("tpl/layout/header.html");
const footer = require("tpl/layout/footer.html");

const __headerData = {
    title: '智库网',
    src: '../../vendors/images/logo.png'
};
const __footerData = {
    kxTitle: '中国科协技术学会',
    kxSrc: '../../vendors/images/footer-kx.jpg',
    zkTitle: '科协智库网',
    zkSrc: '../../vendors/images/footer-logo.jpg',
    content: '中国科学技术协会版权所有 京icp 备 10216604 号-4 海淀分局备案 1101084647'
};

const __header = {
    init() {
        $('.l-header').html(header(__headerData));
    }
};
const __footer = {
    init() {
        $('.l-footer').html(footer(__footerData));
    }
};

export function getHeaderContents(){
    __header.init();
}
export function getFooterContents(){
    __footer.init();
}
