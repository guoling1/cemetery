leftMenu();
//日期控件
jQuery(function ($) {
    $.datepicker.regional['zh-CN'] = {
        clearText: '清除',
        clearStatus: '清除已选日期',
        closeText: '关闭',
        closeStatus: '不改变当前选择',
        prevText: '< 上月',
        prevStatus: '显示上月',
        prevBigText: '<<',
        prevBigStatus: '显示上一年',
        nextText: '下月>',
        nextStatus: '显示下月',
        nextBigText: '>>',
        nextBigStatus: '显示下一年',
        currentText: '今天',
        currentStatus: '显示本月',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthStatus: '选择月份',
        yearStatus: '选择年份',
        weekHeader: '周',
        weekStatus: '年内周次',
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        dayStatus: '设置 DD 为一周起始',
        dateStatus: '选择 m月 d日, DD',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        initStatus: '请选择日期',
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
$(document).ready(function () {
    $("#datepicker").datepicker({
        locale: "zh-cn",
        format: "YYYY-MM-DD",
        dayViewHeaderFormat: "YYYY年 MMMM"
    });
})
var year = new Date().getFullYear();
var month = new Date().getMonth()+1;
var day = new Date().getDate();
var date = year+'-'+ (month<10?'0'+month:month)+'-'+(day<10?'0'+day:day);
$("#datepicker").val(date);
var codeFlag = false;
//提交留言
$('.submit').click(function () {
    var params = {
        oper: 'addReserve',
        unitName: $("#unitName").val(),
        visitingDate: $("#datepicker").val(),
        bookNum: $("#bookNum").val(),
        type: $("#type option:selected").text(),
        linkMan: $("#linkMan").val(),
        LinkTel: $("#LinkTel").val()
    }
    var flag = true;
    for (var i in params) {
        if (!params[i]) {
            flag = false;
            break;
        }
    }
    if (!flag) {
        alert("请填写完整内容")
    } else {
        if (codeFlag) {
            $.ajax({
                type: 'POST',
                url: GLOBEL_URl,
                data: params,
                dataType: "json",
                crossDomain:true== !(document.all),
                success: function (data) {
                    alert(data.msg)
                    $("#unitName").val('')
                    $("#datepicker").val('')
                    $("#bookNum").val('')
                    $("#type option:selected").text('成人')
                    $("#linkMan").val('')
                    $("#LinkTel").val('')
                    $(".codeInp").val('')
                    verifyCode.refresh()
                    $("#datepicker").val(date);
                }
            })
        } else {
            alert("请填写正确的验证码")
        }
    }


})

/*
var GVerify = function (id) {
    function GVerify(options) { //创建一个图形验证码对象，接收options对象为参数
        this.options = { //默认options参数值
            id: "", //容器Id
            canvasId: "verifyCanvas", //canvas的ID
            width: "90", //默认canvas宽度
            height: "44", //默认canvas高度
            type: "blend", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
            code: ""
        }
        if (Object.prototype.toString.call(options) == "[object Object]") {//判断传入参数类型
            for (var i in options) { //根据传入的参数，修改默认参数值
                this.options[i] = options[i];
            }
        } else {
            this.options.id = options.id;
        }

        this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
        this.options.letterArr = getAllLetter();

        this._init();
        this.refresh();
    }

    GVerify.prototype = {
        /!**版本号**!/
        version: '1.0.0',

        /!**初始化方法**!/
        _init: function () {
            var con = document.getElementById(this.options.id);
            var canvas = document.createElement("canvas");
            /!*this.options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
            this.options.height = con.offsetHeight > 0 ? con.offsetHeight : "30";*!/
            canvas.id = this.options.canvasId;
            canvas.width = this.options.width;
            canvas.height = this.options.height;
            canvas.style.cursor = "pointer";
            canvas.innerHTML = "您的浏览器版本不支持canvas";
            console.log(con)
            con.appendChild(canvas);
            var parent = this;
            canvas.onclick = function () {
                parent.refresh();
            }
        },

        /!**生成验证码**!/
        refresh: function () {
            this.options.code = '';
            var canvas = document.getElementById(this.options.canvasId);
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
            }
            ctx.textBaseline = "middle";

            ctx.fillStyle = randomColor(180, 240);
            ctx.fillRect(0, 0, this.options.width, this.options.height);

            if (this.options.type == "blend") { //判断验证码类型
                var txtArr = this.options.numArr.concat(this.options.letterArr);
            } else if (this.options.type == "number") {
                var txtArr = this.options.numArr;
            } else {
                var txtArr = this.options.letterArr;
            }

            for (var i = 1; i <= 4; i++) {
                var txt = txtArr[randomNum(0, txtArr.length)];
                this.options.code += txt;
                // ctx.font = '36px SimHei';
                ctx.font = randomNum(this.options.height / 2, this.options.height) + 'px SimHei'; //随机生成字体大小
                ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
                /!* ctx.shadowOffsetX = randomNum(-3, 3);
                ctx.shadowOffsetY = randomNum(-3, 3);*!/
                ctx.shadowBlur = randomNum(-3, 3);
                ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                var x = this.options.width / 5 * i;
                var y = this.options.height / 2;
                var deg = randomNum(-30, 30);
                /!**设置旋转角度和坐标原点**!/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                /!**恢复旋转角度和坐标原点**!/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }
            /!**绘制干扰线**!/
            for (var i = 0; i < 4; i++) {
                ctx.strokeStyle = randomColor(40, 180);
                ctx.beginPath();
                ctx.moveTo(randomNum(0, this.options.width / 2), randomNum(0, this.options.height / 2));
                ctx.lineTo(randomNum(0, this.options.width / 2), randomNum(0, this.options.height));
                ctx.stroke();
            }
            /!**绘制干扰点**!/
            for (var i = 0; i < this.options.width / 4; i++) {
                ctx.fillStyle = randomColor(0, 255);
                ctx.beginPath();
                ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
                ctx.fill();
            }
        },

        /!**验证验证码**!/
        validate: function (code) {
            var verifyCode = code.toLowerCase();
            var v_code = this.options.code.toLowerCase();
            if (verifyCode == v_code) {
                return true;
            } else {
                return false;
            }
        }
    }

    /!**生成字母数组**!/
    function getAllLetter() {
        var letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
        return letterStr.split(",");
    }

    /!**生成一个随机数**!/
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /!**生成一个随机色**!/
    function randomColor(min, max) {
        var r = randomNum(min, max);
        var g = randomNum(min, max);
        var b = randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    return new GVerify(id);
}
var verifyCode = new GVerify(imgCode);*/
var code1;
onload = function () {
    var container1 = document.getElementById("imgCode");
    code1 = new vCode(container1);
    document.getElementById("btn1").onclick = function () {
        alert(code1.verify(document.getElementById("code1").value));
    }
};
$("#input").on("blur", function () {
    var inputCode = $("#input").val();
    if (code1.verify($("#input").val())) {
    // if (verifyCode.validate($("#input").val())) {
    //     console.log("验证码输入正确")
        codeFlag = true
    } else {
        codeFlag = false
        alert("请输入正确的验证码")
    }
})