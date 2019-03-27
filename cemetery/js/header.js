function AddFavorite(url,title){
    try{
        window.external.addFavorite(url,title);
    }catch(e){
        try{
            window.slidebar.addPanel(title,url,"");
        }catch(e){
            alert("加入收藏失败，\n请使用Ctrl+D进行添加！");
        }
    }
}

/**
 * 搜索下拉选
 */
$('#select').click(function () {
    $('#select .select-ul').css('display','block')
})
$('#select .select-ul li').each(function () {
    $(this).click(function (e) {
        e.stopPropagation();
        $('#select .select-ul').css('display','none');
        $('#select p').html($(this).html())
    })
})

//搜索
$('#search').click(function () {
    window.location.href="search.html?key="+$("#search_key").val();
})
window.onresize = function(){
    var h=$('.img1').eq(0).height();
    $(".banner-box .swiper-wrapper,.banner-box .swiper-slide").css("height",h)
}
$.ajax({
    type: 'POST',
    url: GLOBEL_URl,
    data: {
        oper: 'getContentTypeList'
    },
    dataType : "json",
    crossDomain:true== !(document.all),
    success: function (data) {
        var aList = []
        $(data.data).each(function (ind,item) {
            if(item.ParentId=='00000000-0000-0000-0000-000000000000'){
                item.childList = []
                aList[item.Sort-1]=item
            }
        })
        for(var i=0;i<aList.length;i++){
            for (var j=0;j<data.data.length;j++){
                if(data.data[j].ParentId!='00000000-0000-0000-0000-000000000000'){
                    if(aList[i].ContentTypeId==data.data[j].ParentId){
                        aList[i].childList[data.data[j].Sort-1]=data.data[j]
                    }
                }
            }
        }
        localStorage.setItem('navList',JSON.stringify(aList))

        for(var i=0;i<aList.length;i++){
            if(aList[i].IsNav){
                var oContent = document.createElement('div');
                oContent.className = "content-li";
                oContent.setAttribute('data-id',aList[i].ContentTypeId);
                oContent.setAttribute('data-type',aList[i].Type);
                var op = document.createElement('p');
                op.innerHTML = aList[i].FullName;
               /* var op1 = document.createElement('p');
                op1.innerHTML = aList[i].EnName||' ';*/
                oContent.appendChild(op);
                // oContent.appendChild(op1);
                if(aList[i].childList.length!=0){
                    var liBox = document.createElement('div');
                    liBox.className = "li-box";
                    for(var j=0;j<aList[i].childList.length;j++){
                        if(aList[i].childList[j].IsNav){
                            var oA = document.createElement('a');
                            oA.className = "li-li";
                            oA.innerHTML = aList[i].childList[j].FullName;
                            oA.setAttribute('data-id',aList[i].childList[j].ContentTypeId);
                            oA.setAttribute('data-type',aList[i].childList[j].Type);
                            if(aList[i].childList[j].Type=='about'){
                                oA.href='public-content.html?id='+aList[i].childList[j].ContentTypeId+'&ParentId='+aList[i].ContentTypeId;
                            }else if(aList[i].childList[j].Type=='reserve'){
                                oA.href='reservation-info.html?id='+aList[i].childList[j].ContentTypeId+'&ParentId='+aList[i].ContentTypeId;
                            }else if(aList[i].childList[j].Type=='feedback'){
                                oA.href='suggestion.html?id='+aList[i].childList[j].ContentTypeId+'&ParentId='+aList[i].ContentTypeId;
                            }else if(aList[i].childList[j].Type=='news'){
                                oA.href='public-new1.html?id='+aList[i].childList[j].ContentTypeId+'&ParentId='+aList[i].ContentTypeId;
                            }else if(aList[i].childList[j].Type=='picture'){
                                oA.href='hero-deeds.html?name='+aList[i].childList[j].FullName+'&id='+aList[i].childList[j].ContentTypeId+'&ParentId='+aList[i].ContentTypeId;
                            }
                            oA.herf=""

                            var oSpan = document.createElement('span');
                            oSpan.innerHTML = "|";
                            liBox.appendChild(oA);
                            if(j!=aList[i].childList.length-1){
                                liBox.appendChild(oSpan);
                            }
                        }
                    }
                    oContent.appendChild(liBox)

                }else {
                    oContent.onclick = function () {
                        if(this.getAttribute('data-type')=='about'){
                            window.location.href='contact.html?id='+this.getAttribute('data-id');
                        }else if(this.getAttribute('data-type')=='news'){
                            window.location.href='public-new.html?id='+this.getAttribute('data-id')+'&pathName='+this.innerText;
                        }else if(this.getAttribute('data-type')=='sacrifice'){
                            window.location.href='memorial-personal.html?id='+this.getAttribute('data-id');
                            // window.location.href='mpDetail.html?id='+this.getAttribute('data-id');
                        }else if(this.getAttribute('data-type')=='panorama'){
                            window.open('https://720yun.com/t/gygmaploljh5yazws9');
                        }
                    }
                }
                // document.getElementsByClassName("content-list")[0].appendChild(oContent);

                $('.content-list').eq(0).append(oContent)
            }
        }
    }
})
if(!/flower/.test(window.location.pathname)) {
    $.ajax({
        type: 'POST',
        url: GLOBEL_URl,
        data: {
            oper: 'getBannerList'
        },
        crossDomain:true== !(document.all),
        dataType: "json",
        success: function (data) {
            var slider = ''
            for (var i = 0; i < data.data.length; i++) {
                slider += '<div class="swiper-slide"><img class="img1" src="' + GLOBEL_IP + data.data[i].ImgUrl + '" alt=""></div>'
            }
            $('#swiper').html(slider);
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
            $('.img1').eq(0).on('load',function () {
                $('.banner-box').show();
                var mySwiper = new Swiper('.banner-swiper', {
                    autoplay : 2500,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        },
                    // pagination: '.pagination',
                    loop:true,
                    autoplayDisableOnInteraction:false
                    // grabCursor: true,
                    // paginationClickable: true
                })
                $('.arrow-left').on('click', function(e){
                    e.preventDefault();
                    mySwiper.swipePrev();
                })
                $('.arrow-right').on('click', function(e) {
                    e.preventDefault();
                    mySwiper.swipeNext();
                })
                var h=$('.img1').eq(0).height();
                $(".banner-box .swiper-wrapper,.banner-box .swiper-slide").css("height",h)
            })
        }
    })
}
