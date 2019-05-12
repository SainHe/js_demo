const science = require('tpl/index/science.html');
const interflow = require('tpl/index/interflow.html');
const banner = require('tpl/index/banner.html');
const achievement = require('tpl/index/achievement.html');
const news = require('tpl/index/news.html');
const policy = require('tpl/index/policy.html');
const online = require('tpl/index/online.html');
const video = require('tpl/index/video.html');
const $ajax = window.util.ajax;
import {
    getHeaderContents,
    getFooterContents,
    getNavigationContents
} from './layout.js';
import Swiper from 'swiper';

const __bannerData = [{
        link: 'javascript:;',
        img: '../../vendors/images/banner1.jpg',
        title: '中国经济形势展望与乡村振兴高级 研讨班”成功在京举行111'
    },
    {
        link: 'javascript:;',
        img: '../../vendors/images/banner1.jpg',
        title: '中国经济形势展望与乡村振兴高级 研讨班”成功在京举行222'
    },
    {
        link: 'javascript:;',
        img: '../../vendors/images/banner1.jpg',
        title: '中国经济形势展望与乡村振兴高级 研讨班”成功在京举行333'
    }
]

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
        title: '瑞典斯德哥尔摩国际和平研究所',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '新加坡东南亚研究所',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '斯坦福国际咨询研究所',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '日本综合研究开发机构',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '李伟主任应邀出席经合组织部长级理事会等会议并发',
        time: '2019-02-19'
    }]
}

const __policyData = {
    columnLink: 'javascript:;',
    columnImg: '../../vendors/images/list-title-policy.png',
    list: [{
        href: 'javascript:;',
        title: '超五成受访者 听信过“酸碱体质理论”',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '倡导绿色制造推动乡村振兴',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '加拿大超市里热卖的芥花籽油到底能吃吗？',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '日照：聚力为经济社会发展增添科技动能',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '科技服务形式多样吸引群众争相体验',
        time: '2019-02-19'
    }]
}

const __onlineData = {
    columnLink: 'javascript:;',
    columnImg: '../../vendors/images/list-title-online.png',
    list: [{
        href: 'javascript:;',
        title: '李伟：激发经济新动能根本在于改革开放',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '高飞：改革开放40年中国外交的历程与启示',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '甄占民：改革开放与中国特色社会主义同向共进',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '龙永图：一带一路不是冤大头 首先有利于中国',
        time: '2019-02-19'
    }, {
        href: 'javascript:;',
        title: '黄进：新时代中国特色社会主义法治理论的创新进展',
        time: '2019-02-19'
    }]
}


const __videoData = {
    columnLink: 'javascript:;',
    columnImg: '../../vendors/images/list-title-video.png',
    list: [{
        href: 'javascript:;',
        title: '全球工程前沿2018'
    }, {
        href: 'javascript:;',
        title: '金属材料生命周期环境特性和节能减排特性研究'
    }, {
        href: 'javascript:;',
        title: '民营经济发展40年：五次争论及其启示'
    }, {
        href: 'javascript:;',
        title: '欧盟与中国的创新关系：从零到全球网络 首先有利于中国'
    }, {
        href: 'javascript:;',
        title: '我国海岛生态环境脆弱性及保护战略研究'
    }]
}

const __achievementData = {
    columnLink: 'javascript:;',
    columnImg: '../../vendors/images/achievement-title.png',
    list: [{
        href: 'javascript:;',
        src: '../../vendors/images/achievement-img.jpg',
        title: '以矫正财务信息扭曲为切入点，提高金融服务实体经济质量',
        content: '岁末年终，各大APP发布年度数据报告越来越成为一种仪式般的存在，备受舆论关注。这其中，最具代表性的当属多次荣登社交平台热搜榜的支付宝、微信和网易...',
        time: '15分钟前'
    }, {
        href: 'javascript:;',
        src: '../../vendors/images/achievement-img.jpg',
        title: '以矫正财务信息扭曲为切入点，提高金融服务实体经济质量',
        content: '岁末年终，各大APP发布年度数据报告越来越成为一种仪式般的存在，备受舆论关注。这其中，最具代表性的当属多次荣登社交平台热搜榜的支付宝、微信和网易...',
        time: '15分钟前'
    }, {
        href: 'javascript:;',
        src: '../../vendors/images/achievement-img.jpg',
        title: '以矫正财务信息扭曲为切入点，提高金融服务实体经济质量',
        content: '岁末年终，各大APP发布年度数据报告越来越成为一种仪式般的存在，备受舆论关注。这其中，最具代表性的当属多次荣登社交平台热搜榜的支付宝、微信和网易...',
        time: '15分钟前'
    }, {
        href: 'javascript:;',
        src: '../../vendors/images/achievement-img.jpg',
        title: '以矫正财务信息扭曲为切入点，提高金融服务实体经济质量',
        content: '岁末年终，各大APP发布年度数据报告越来越成为一种仪式般的存在，备受舆论关注。这其中，最具代表性的当属多次荣登社交平台热搜榜的支付宝、微信和网易...',
        time: '15分钟前'
    }]
}

const __newsData = {
    columnLink: 'javascript:;',
    columnImg: '../../vendors/images/news-title.png',
    list: [{
        columnName: '热点',
        flist: {
            link: 'javascript:;',
            img: '../../vendors/images/news-img.jpg',
            title: '李伟主任会见印度驻华大使唐勇胜111',
            time: '2019-02-19'
        },
        slist: [{
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜111'
        }, {
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜111'
        },{
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜111'
        }, {
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜111'
        }]
    }, {
        columnName: '经济',
        flist: {
            link: 'javascript:;',
            img: '../../vendors/images/news-img.jpg',
            title: '李伟主任会见印度驻华大使唐勇胜222',
            time: '2019-02-19'
        },
        slist: [{
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜222'
        }, {
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜222'
        },{
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜222'
        }, {
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜222'
        }]
    }, {
        columnName: '政治',
        flist: {
            link: 'javascript:;',
            img: '../../vendors/images/news-img.jpg',
            title: '李伟主任会见印度驻华大使唐勇胜333',
            time: '2019-02-19'
        },
        slist: [{
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜333'
        }, {
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜333'
        },{
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜333'
        }, {
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜333'
        }]
    }, {
        columnName: '社会',
        flist: {
            link: 'javascript:;',
            img: '../../vendors/images/news-img.jpg',
            title: '李伟主任会见印度驻华大使唐勇胜444',
            time: '2019-02-19'
        },
        slist: [{
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜444'
        }, {
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜444'
        },{
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜444'
        }, {
            link: 'javascript:;',
            title: '李伟主任会见印度驻华大使唐勇胜444'
        }]

    }]
}

const __index = {
    init() {
        getHeaderContents();
        getNavigationContents();
        getFooterContents();
        this.getScience();
        this.getInterflow();
        this.getBanner();
        this.getAchievement();
        this.getNews();
        this.getPolicy();
        this.getOnline();
        this.getVideo();
        this.tabControl();
        this.slideshow();
        $('._globalNavBar li').eq(0).addClass('active');
    },
    // 选项卡
    tabControl() {
        $('.news-btn > a').eq(0).addClass('active');
        $('#newsTab > .news-list').eq(0).addClass('active');
        $('.news-btn > a').on('click', function() {
            let $newsIndex = $(this).index();
            $(this).addClass('active').siblings('a').removeClass('active');
            $('#newsTab > .news-list').eq($newsIndex).addClass('active').siblings('.news-list').removeClass('active');
        });
    },
    // 轮播图
    slideshow() {
        let swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 5000,
            spaceBetween: 30,
            pagination: '.swiper-pagination',
            paginationClickable: true,
        });
    },
    // banner
    getBanner() {
        $('.m-banner').html(banner(__bannerData));
    },
    // 科技人物
    getScience() {
        $('.science').html(science(__scienceData));
    },
    // 舆情交流
    getInterflow() {
        $('.interflow').html(interflow(__interflowData));
    },
    // 智库成果
    getAchievement() {
        $('.achievement').html(achievement(__achievementData));
    },
    // 智库要闻
    getNews() {
        $('.news').html(news(__newsData));
    },
    // 科技政策
    getPolicy() {
        $('.policy').html(policy(__policyData));
    },
    // 科情在线
    getOnline() {
        $('.online').html(online(__onlineData));
    },
    // 智库视频
    getVideo() {
        $('.video').html(video(__videoData));
    }
};

$(function() {
    __index.init();
});
