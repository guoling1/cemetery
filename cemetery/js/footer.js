//设置网站配置
$.ajax({
    type: 'POST',
    url: GLOBEL_URl,
    data: {
        oper: 'getConfig'
    },
    dataType : "json",
    success: function (data) {
        $('.foot-right').html(data.data.FootRight);
        $('#qrcode').attr('src',GLOBEL_IP+data.data.WeixinImage)
        // $('#qrcode').src(GLOBEL_IP+data.data.WeixinImage)
        /*$('#FootRight').html(data.data.FootRight)
        if(/ /.test(data.data.FootAddress)){
            var arr = data.data.FootAddress.split(' ')
            $('#FootAddress').html(arr[0])
            $('#FootAddress1').html(arr[1]+' '+arr[2])
        }else {
            $('#FootAddress').html(data.data.FootAddress)
        }
        $('.other').html(data.data.FootOther)*/
    }
})
$('#logoimg').append(unescape("%3Cspan id='_ideConac' %3E%3C/span%3E%3Cscript src='http://dcs.conac.cn/js/05/000/0000/60676994/CA050000000606769940002.js' type='text/javascript'%3E%3C/script%3E"))