const $ajax = window.util.ajax;
import {
    getHeaderContents,
    getFooterContents,
    getNavigationContents
} from './layout.js';

const __expert = {
    init() {
        getHeaderContents();
        getNavigationContents();
        getFooterContents();
        $('._globalNavBar li').eq(4).addClass('active');
        this.tabControlExpert();
        this.expertSearch();
    },
    // 专家库选项卡
    tabControlExpert() {
        $('.column-expert-nav li').on('click',function(){
            if($(this).index()==0){
                $(this).addClass('active').siblings('li').removeClass('active');
                $('.expert-list').show();
            }else{
                $(this).addClass('active').siblings('li').removeClass('active');
                $('.expert-list').eq($(this).index()-1).show().siblings('.expert-list').hide();
            }

        })
    },
    // 专家库搜索
    expertSearch() {
        $('._searchExpert').on('click',function(){
            let searchText = $('._searchKeyword').val();
            let exist = false;    // 记录所有列表是否存在关键词
            if(!searchText){
                $('.expert-list').show();
                $('.expert-list li').show();
                return;
            }
            $('.expert-list').each(function()//遍历
            {
                // 把之前搜索隐藏的都显示
                $(this).show();
                $(this).find('li').show();
                // 判断每个列表里是否包含关键字的专家
                if($(this).text().indexOf(searchText) > -1){
                    exist = true;
                    // 如果列表内存在，继续查找
                    $(this).find('li').each(function(){
                        if($(this).text().indexOf(searchText) > -1){

                        }else{
                            $(this).hide();
                        }
                    });
                }else{
                    // 不包含关键字的列表隐藏
                    $(this).hide();
                    $(this).find('li').hide();
                }
            });
            exist ? $('.u-notfound').hide() : $('.u-notfound').show();
        })
    }


};

$(function() {
    __expert.init();
});
