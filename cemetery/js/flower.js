//获取鲜花数
getSacrifice()
function getSacrifice(){
    $.ajax({
        type: 'POST',
        url: GLOBEL_URl,
        data: {
            oper: 'getSacrifice',
            type: $.Request("type")
        },
        dataType : "json",
        success: function (data) {
            $('#peopleNum').html('累计祭奠人数：'+data.data)
        }
    })
}
var center_left= document.getElementById('center_left');
var center_right= document.getElementById('center_right');
var flower_group= document.getElementById('flower_group');

center_left.onclick=function(){
    flower_group.style.display="block"
}
center_right.onclick=function(){
    flower_group.style.display="none";
    document.getElementById('people').style.display="block"
    document.getElementById('people').src = 'images/bend1.gif'
    addSacrificeClick()
    setTimeout(function () {
        document.getElementById('people').src = 'images/bend2.png'
    },1000)
}
document.getElementById('main').style.height=(document.body.clientHeight-202)+'px';
function getElementsByClassName(node, className) {
    if (node.getElementsByClassName) {
        // 使用现有方法
        return node.getElementsByClassName(className);
    } else {
        // 循环遍历所有标签，返回带有相应类名的元素
        var results = [],
            elems = node.getElementsByTagName("*");
        for (var i = 0, len = elems.length; i < len; i++) {
            if (elems[i].className.indexOf(className) != -1) {
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}
var aItem = getElementsByClassName(document,'item');
for (var i=0;i<aItem.length;i++){
    aItem[i].onclick = function () {
        addSacrificeClick();
        getElementsByClassName(document,'img')[0].style.display="block"
        getElementsByClassName(document,'img')[1].style.display="block"
        getElementsByClassName(document,'img')[0].src = this.childNodes[0].src;
        getElementsByClassName(document,'img')[1].src = this.childNodes[0].src;
        flower_group.style.display="none"
    }
}
$(window).resize(function () {          //当浏览器大小变化时
    document.getElementById('main').style.height=(document.body.clientHeight-202)+'px'
    // console.log($(window).height());          //浏览器时下窗口可视区域高度
    // console.log($(document).height());        //浏览器时下窗口文档的高度
    // console.log($(document.body).height());   //浏览器时下窗口文档body的高度
    // console.log($(document.body).outerHeight(true)); //浏览器时下窗口文档body的总高度 包括border padding margin
});
function addSacrificeClick() {
    $.ajax({
        type: 'POST',
        url: GLOBEL_URl,
        data: {
            oper: 'addSacrificeClick',
            type: $.Request("type")
        },
        dataType : "json",
        success: function (data) {
            // alert(data.msg)
            getSacrifice()
        }
    })
}

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