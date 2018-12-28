

//获取咨询
$.ajax({
    type: "POST",
    dataType: "json",
    url: GLOBEL_URl,
    data: {
        oper: 'getContentList',
        typeid: '43c18d0e-0772-451a-912d-d36bcacace63',
        pageSize: 4,
        pageIndex: 1
    },
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            aLi += `
                        <li class="clear">
                            <a href="public-new-detail.html?id=`+item.ContentId+`&ParentId=d9826e7d-cedb-4a24-a8bf-e63ecdb30e25">
                                <div class="left fl">
                                    <p class="day">`+formatDate(item.CreateDate)[1]+`</p>
                                    <p>`+formatDate(item.CreateDate)[0]+`</p>
                                </div>
                                <div class="right">
                                    <div class="top">
                                    <span class="title">`+item.Title+`</span>
                                </div>
                                <div class="detail">`+item.Summary+`</div>
                                </div>
                            </a>
                        </li>
                                `
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
        pageSize: 4,
        pageIndex: 1
    },
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            aLi += `
                        <li>
                        <a href="public-new-detail.html?id=`+item.ContentId+`&parentName=通知公告&&ParentId=a7514f49-4792-48eb-8f0c-2e73c7c68589">
                            <div class="number">0`+(ind+1)+`</div>
                            <div class="title">`+item.Title+`</div>
                            <div class="date">`+item.CreateDate.split(' ')[0]+`</div>
                           </a>
                        </li>
                                   
                                `
        })
        $('.column2').html(aLi)
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
    success: function (data) {
        var aLi = '';
        $(data.data).each(function (ind, item) {
            aLi += `
                        <div class="swiper-slide">
                        <a href="hero-deeds-detail.html?ContentId=`+item.ContentId+`&ParentId=41679da8-c6dd-435d-8c0d-bc4ff8b19a25&id=6fb5c25f-d08b-4220-b52c-c4b4e7bd88b0"><img src="`+GLOBEL_IP+``+item.ImgUrl+`" alt="">
                        <div class="title"><p>`+item.Title+`</p>
                    <i></i></div></a>
                    </div>
                                `
        })
        $('.column3 .swiper-wrapper').html(aLi)
        var introduceContent = new Swiper('.introduce-content', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,
            // autoplay: false,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }
})