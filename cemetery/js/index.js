// var mySwiper = new Swiper('.banner-swiper', {
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// })
// var mySwiper = new Swiper('.banner-swiper', {
//     autoplay : 2500,
//     pagination: '.pagination',
//     loop:true,
//     grabCursor: true,
//     paginationClickable: true
// })
// $('.arrow-left').on('click', function(e){
//     e.preventDefault();
//     mySwiper.swipePrev();
// })
// $('.arrow-right').on('click', function(e) {
//     e.preventDefault();
//     mySwiper.swipeNext();
// })


//    友情链接
$.ajax({
    type: 'POST',
    url: GLOBEL_URl,
    data: {
        oper: 'getLinkList'
    },
    crossDomain:true== !(document.all),
    dataType : "json",
    success: function (data) {
        var aLi='';
        $(data.data).each(function (ind,item) {
            if(data.data.length-1==ind){
                aLi+='<li class="noR"><a href="'+item.LinkUrl+'"><img src="'+GLOBEL_IP+''+item.ImgUrl+'" alt=""></a></li>'
            }else{
                aLi+='<li><a href="'+item.LinkUrl+'"><img src="'+GLOBEL_IP+''+item.ImgUrl+'" alt=""></a></li>'
            }

        })
        $('.section5-ul').html(aLi)
    }
});
//获取轮播图
$.ajax({
    type: 'POST',
    url: GLOBEL_URl,
    data: {
        oper: 'getSlideList',
        top:6
    },
    dataType : "json",
    crossDomain:true== !(document.all),
    success: function (data) {
        var aLi='';
        $(data.data).each(function (ind,item) {
            // aLi+='<div class="swiper-slide"><img src="'+GLOBEL_IP+''+item.ImgUrl+'" alt=""></div>'
            aLi+='<div class="swiper-slide"><a href="public-new-detail1.html?ContentId='+item.ContentId+'&ParentId=d9826e7d-cedb-4a24-a8bf-e63ecdb30e25&id=43c18d0e-0772-451a-912d-d36bcacace63"><img class="img3" src="'+GLOBEL_IP+''+item.ImgUrl+'" alt=""><div class="title">'+item.Title+'</div> </a></div>'
        })
        $('.news-swiper .swiper-wrapper').html(aLi);
        // new Swiper('.news-swiper', {
        //     loop: true,
        //     autoplay: {
        //         delay: 2500,
        //         disableOnInteraction: false,
        //     },
        //     pagination: {
        //         el: '.swiper-pagination',
        //     }
        // })
        $('.img3').eq(0).on('load',function () {
            // $('.banner-box').show();
            var newSwiper = new Swiper('.news-swiper', {
                autoplay : 2500,
                // pagination: '.pagination',
                loop:true,
                autoplayDisableOnInteraction:false
            })
            // var h=$('.img2').eq(0).height();
            $(".news-swiper .swiper-wrapper,.news-swiper .swiper-slide").css("height",350)
        })
    }
});

//获取咨询
$.ajax({
    type: "POST",
    dataType: "json",
    url: GLOBEL_URl,
    crossDomain:true== !(document.all),
    data: {
        oper: 'getContentList',
        typeid: '43c18d0e-0772-451a-912d-d36bcacace63',
        pageSize: 7,
        pageIndex: 1
    },
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            // aLi += `
            //             <li><a href="public-new-detail1.html?ContentId=`+item.ContentId+`&ParentId=d9826e7d-cedb-4a24-a8bf-e63ecdb30e25&id=43c18d0e-0772-451a-912d-d36bcacace63">`+item.Title+`</a></li>
            //
            //                     `
            aLi += '<li><a href="public-new-detail1.html?ContentId='+item.ContentId+'&ParentId=d9826e7d-cedb-4a24-a8bf-e63ecdb30e25&id=43c18d0e-0772-451a-912d-d36bcacace63">'+item.Title+'</a></li>'
        })
        $('.column1').html(aLi)
    }
})
//获取通知公告
$.ajax({
    type: "POST",
    dataType: "json",
    url: GLOBEL_URl,
    data: {
        oper: 'getContentList',
        typeid: 'a7514f49-4792-48eb-8f0c-2e73c7c68589',
        pageSize: 6,
        pageIndex: 1
    },
    crossDomain:true== !(document.all),
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            // aLi += `
            //             <li>
            //                 <a href="public-new-detail.html?id=`+item.ContentId+`&parentName=通知公告"><span class="index">0`+(ind+1)+`</span>
            //                     `+item.Title+`</a>
            //             </li>
            //
            //                     `
            aLi += '<li><a href="public-new-detail.html?id=`+item.ContentId+`&parentName=通知公告"><span class="index">0'+(ind+1)+'</span>'+item.Title+'</a></li>'
        })
        $('.column2').html(aLi)
    }
})
//获取党建行风
$.ajax({
    type: "POST",
    dataType: "json",
    url: GLOBEL_URl,
    data: {
        oper: 'getContentList',
        typeid: 'e1c94464-91c9-4ebc-ad13-4215ba513f33',
        pageSize: 6,
        pageIndex: 1
    },
    crossDomain:true== !(document.all),
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            // aLi += `
            //             <li class="content-li"><a href="public-new-detail1.html?ContentId=`+item.ContentId+`&ParentId=d9826e7d-cedb-4a24-a8bf-e63ecdb30e25&id=e1c94464-91c9-4ebc-ad13-4215ba513f33"> `+item.Title+`</a></li>
            //                     `
            aLi += '<li class="content-li"><a href="public-new-detail1.html?ContentId='+item.ContentId+'&ParentId=d9826e7d-cedb-4a24-a8bf-e63ecdb30e25&id=e1c94464-91c9-4ebc-ad13-4215ba513f33"> '+item.Title+'</a></li>'
        })
        $('.column3').html(aLi)
    }
})
//获取史料研究
$.ajax({
    type: "POST",
    dataType: "json",
    url: GLOBEL_URl,
    data: {
        oper: 'getContentList',
        typeid: '7035075a-81fb-4f8f-bce3-eb239503af9a',
        pageSize: 6,
        pageIndex: 1
    },
    crossDomain:true== !(document.all),
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            // aLi += `
            //             <li class="content-li"><a href="public-new-detail1.html?ContentId=`+item.ContentId+`&ParentId=908dbfb9-340a-4bda-b76a-b14056741856&id=7035075a-81fb-4f8f-bce3-eb239503af9a"> `+item.Title+`</a></li>
            //                     `
            aLi += '<li class="content-li"><a href="public-new-detail1.html?ContentId='+item.ContentId+'&ParentId=908dbfb9-340a-4bda-b76a-b14056741856&id=7035075a-81fb-4f8f-bce3-eb239503af9a"> '+item.Title+'</a></li>'
        })
        $('.column4').html(aLi)
    }
})

//获取宣传活动
$.ajax({
    type: "POST",
    dataType: "json",
    url: GLOBEL_URl,
    data: {
        oper: 'getContentList',
        typeid: '7fbcc6a6-2f56-4fc5-a611-324980a39e53',
        pageSize: 6,
        pageIndex: 1
    },
    crossDomain:true== !(document.all),
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            // aLi += `
            //             <li class="content-li"><a href="public-new-detail1.html?ContentId=`+item.ContentId+`&ParentId=d9826e7d-cedb-4a24-a8bf-e63ecdb30e25&id=7fbcc6a6-2f56-4fc5-a611-324980a39e53"> `+item.Title+`</a></li>
            //                     `
            aLi += '<li class="content-li"><a href="public-new-detail1.html?ContentId='+item.ContentId+'&ParentId=d9826e7d-cedb-4a24-a8bf-e63ecdb30e25&id=7fbcc6a6-2f56-4fc5-a611-324980a39e53">'+item.Title+'</a></li>'
        })
        $('.column5').html(aLi)
    }
})

//获取英烈事迹
$.ajax({
    type: "POST",
    dataType: "json",
    url: GLOBEL_URl,
    data: {
        oper: 'getContentList',
        typeid: 'ea51e2ce-0a70-4e90-875b-b587617e75aa',
        pageSize: 6,
        pageIndex: 1
    },
    crossDomain:true== !(document.all),
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            // aLi += `
            //             <li class="content-li"><a href="hero-deeds-detail.html?ContentId=`+item.ContentId+`&id=ea51e2ce-0a70-4e90-875b-b587617e75aa&ParentId=908dbfb9-340a-4bda-b76a-b14056741856"> `+item.Title+`</a></li>
            //                     `
            aLi+='<li class="content-li"><a href="hero-deeds-detail.html?ContentId='+item.ContentId+'&id=ea51e2ce-0a70-4e90-875b-b587617e75aa&ParentId=908dbfb9-340a-4bda-b76a-b14056741856">'+item.Title+'</a></li>'
        })
        $('.column6').html(aLi)
    }
})
//获取纪念建筑
$.ajax({
    type: "POST",
    dataType: "json",
    url: GLOBEL_URl,
    data: {
        oper: 'getContentList',
        typeid: '6fb5c25f-d08b-4220-b52c-c4b4e7bd88b0',
        pageSize: 10,
        pageIndex: 1
    },
    crossDomain:true== !(document.all),
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            // aLi += `
            //             <div class="swiper-slide">
            //             <a href="hero-deeds-detail.html?ContentId=`+item.ContentId+`&ParentId=41679da8-c6dd-435d-8c0d-bc4ff8b19a25&id=6fb5c25f-d08b-4220-b52c-c4b4e7bd88b0"><img src="`+GLOBEL_IP+``+item.ImgUrl+`" alt="">
            //             <div class="title">`+item.Title+`</div></a>
            //
            //             <div class="content">`+item.Summary+`</div>
            //         </div>
            //                     `
            aLi += '<div class="swiper-slide"><a href="hero-deeds-detail.html?ContentId='+item.ContentId+'&ParentId=41679da8-c6dd-435d-8c0d-bc4ff8b19a25&id=6fb5c25f-d08b-4220-b52c-c4b4e7bd88b0"><img class="img2" src="'+GLOBEL_IP+''+item.ImgUrl+'" alt=""><div class="title">'+item.Title+'</div></a><div class="content">'+item.Summary+'</div></div>'
        })
        $('.section3 .swiper-wrapper').html(aLi);
        $('.img2').eq(0).on('load',function () {
            $('.banner-box').show();
            var mySwiper3 = new Swiper('.section3', {
                autoplay : 2500,
                navigation: {
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1'
                },
                // pagination: '.pagination',
                loop:true,
                autoplayDisableOnInteraction:false,
                slidesPerView: 4,
                    spaceBetween: 30
                // grabCursor: true,
                // paginationClickable: true
            })
            $('.swiper-button-next1').on('click', function(e){
                e.preventDefault();
                mySwiper3.swipePrev();
            })
            $('.swiper-button-prev1').on('click', function(e) {
                e.preventDefault();
                mySwiper3.swipeNext();
            })
            // var h=$('.img2').eq(0).height();
            $(".section3 .swiper-wrapper,.section3 .swiper-slide").css("height",330)
        })
        // var section3Swiper = new Swiper('.section3', {
        //     loop: true,
        //     slidesPerView: 4,
        //     spaceBetween: 30,
        //     // autoplay: false,
        //     autoplay: {
        //         delay: 4500,
        //         disableOnInteraction: false
        //     },
        //     navigation: {
        //         nextEl: '.swiper-button-next1',
        //         prevEl: '.swiper-button-prev1'
        //     }
        // })
    }
})