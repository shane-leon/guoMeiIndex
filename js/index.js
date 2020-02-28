var ccUl = document.getElementById("center_center");
var ccLi = ccUl.getElementsByTagName("li");
var ccSmall = document.getElementById("small");
var ccSpan = ccSmall.getElementsByTagName("span");
var cc_every = document.getElementById("cc_every");
var num = 0;
var timer = null;
//初始化样式
ccLi[0].style.opacity = "1";
ccSpan[0].className = "bianse";

//实现动态交互
for (var i = 0; i < ccSpan.length; i++) {
    ccSpan[i].index = i;
    ccSpan[i].onmouseover = function () {
        clearInterval(timer) //!!!在滑动之前优先清除掉定时器
        //判断，当鼠标不在当前位置在执行一下代码
        if (this.index != num) {
            for (var j = 0; j < ccSpan.length; j++) {
                //循环清除
                ccLi[j].style.opacity = "0";
                ccSpan[j].className = "";
            }
            //点击的这个，this指向点击事件
            this.className = "bianse";
            timer = ujiuye.bufferMove(ccLi[this.index], {
                opacity: 100
            });
            num = this.index;
        }
    }
}
//增加定时器效果（图片自动轮播）
//给定时器重新命名，防止清除第一个定时器
var timer2 = setInterval(auto, 2000);

function auto() { //自动轮播的函数
    num++;
    if (num >= ccLi.length) {
        num = 0
    }
    for (var j = 0; j < ccSpan.length; j++) {
        //循环清除
        ccLi[j].style.opacity = "0";
        ccSpan[j].className = "";
    }

    ccSpan[num].className = "bianse";
    timer = ujiuye.bufferMove(ccLi[num], {
        opacity: 100
    });
}

//鼠标移入，清除定时器
cc_every.onmousemove = function () {
    clearInterval(timer2);
}

//鼠标移入，添加定时器
cc_every.onmouseout = function () {
    timer2 = setInterval(auto, 2000);
}
var ccleft = document.getElementById("ccleft");
var ccright = document.getElementById("ccright");
//点击上一张
ccleft.onclick = function () {
    num--;
    if (num <= 0) {
        num = 7
    }
    for (var j = 0; j < ccSpan.length; j++) {
        //循环清除
        ccLi[j].style.opacity = "0";
        ccSpan[j].className = "";
    }

    ccSpan[num].className = "bianse";
    timer = ujiuye.bufferMove(ccLi[num], {
        opacity: 100
    });
}

//点击下一张
ccright.onclick = function () {
    auto();
    // console.log(num);

}

// 倒计时
var time_ir = document.getElementById("time_ir");
var time_ir_em = time_ir.getElementsByTagName("em");
// console.log(time_ir_em);
count_time();
setInterval(count_time, 10)

function count_time() {
    /* 当前时间 */
    var currentDate = new Date();
    var futureDate = new Date(2030, 1 - 1, 24, 0, 0, 0);
    // var futureDate = new Date(0, 0, 1, 24, 0, 0);
    var time = (futureDate - currentDate) / 1000;
    // var t = parseInt(time / 86400);
    var h = parseInt(time % 86400 / 3600);
    var m = parseInt(time % 3600 / 60);
    var s = parseInt(time % 60);
    time_ir_em[0].innerHTML = ujiuye.toTwo(h);
    time_ir_em[1].innerHTML = ujiuye.toTwo(m);
    time_ir_em[2].innerHTML = ujiuye.toTwo(s);
};
// 
// 
// 美日必抢按钮
// 倒计时商品
var count_l = document.getElementById("count_l");
// 商品切换按钮盒子
var count_l_btn_box = document.getElementById("count_l_btn");
// 商品切换按钮
var count_l_btn = count_l_btn_box.getElementsByTagName("div");
// 切换变量
var count_a = 0;
// 商品内容
var count_l_list = document.getElementById("count_l_list");
var list_lay = count_l_list.getElementsByTagName("section");
// console.log(list_lay);
// 鼠标移入移出显示隐藏按钮
count_l.onmouseover = function () {
    count_l_btn_box.style.display = "block";
};
count_l.onmouseout = function () {
    count_l_btn_box.style.display = "none";
};
// 上一个
count_l_btn[0].onclick = function () {
    count_a--;
    for (var i = 0; i < list_lay.length; i++) {
        list_lay[i].style.display = "none";
    }
    if (count_a < 0) {
        count_a = list_lay.length - 1;
    }
    list_lay[count_a].style.display = "block";
};
// 下一个
count_l_btn[1].onclick = function () {
    count_a++;
    for (var i = 0; i < list_lay.length; i++) {
        list_lay[i].style.display = "none";
    }
    if (count_a > list_lay.length - 1) {
        count_a = 0;
    }
    list_lay[count_a].style.display = "block";
};
// 


// 
//
//必买清单的js动效
var five_left_bottom = document.getElementById("five_left_bottom");
var five_left_1 = five_left_bottom.getElementsByClassName("five_left_1");
var five_i = five_left_bottom.getElementsByClassName("five_i");
// 循环添加事件(名字向外伸出)
for (var i = 0; i < five_left_1.length; i++) {
    five_left_1[i].index = i;
    five_left_1[i].onmouseover = function () {
        five_i[this.index].style.display = "block";
        ujiuye.move(five_i[this.index], "width", 5, 60);
    }
    five_left_1[i].onmouseout = function () {
        ujiuye.move(five_i[this.index], "width", 5, 0);
        five_i[this.index].style.display = "none";

    }
}
// 必买清单  点赞加1
var iandem = five_left_bottom.getElementsByClassName("iandem");
var five_i2 = five_left_bottom.getElementsByClassName("five_i2");
for (var i = 0; i < five_left_1.length; i++) {
    iandem[i].index = i;
    iandem[i].onclick = function () {
        five_i2[this.index].innerHTML++;

    }
}
// 一楼选项卡
var st = document.getElementById("st");
var stLi = st.getElementsByTagName("li");
var sc4 = document.getElementById("sc4");
// 循环添加
// for (var i = 0; i < stLi.length; i++) {
//     stLi[i].index = i;
//     stLi[i].onmouseover = function () {
//         for (var j = 0; j < stLi.length; j++) {
//             stLi[j].className = "";
//         }
//         stLi[this.index].className = "six_st";
//     }
// }
stLi[1].onmouseover = function () {
    sc4.style.display = "block";
    stLi[0].className = "";
    stLi[1].className = "six_st";
}
stLi[0].onmouseover = function () {
    sc4.style.display = "none";
    stLi[1].className = "";
    stLi[0].className = "six_st";
}

// 

// 

// 1f轮播
// 一楼左轮播图
var slider_page_btn = document.getElementById("slider_page").getElementsByTagName("p");
var mc_c_cot_li = document.getElementById("mc_c_cot").getElementsByTagName("li");
var brand_ul = document.getElementById("brand").getElementsByTagName("ul");
var slider_page = 0;
var sc2 = document.getElementById("sc2");
var olli = sc2.getElementsByTagName("ol")[0].getElementsByTagName("li");


// 初始化样式
olli[0].className = "sixolli";
var timer3 = setInterval(auto2, 3000);

function auto2() {
    slider_page++;
    for (var i = 0; i < mc_c_cot_li.length; i++) {
        mc_c_cot_li[i].style.display = "none";
        brand_ul[i].style.display = "none";
        olli[i].className = "";
    }

    if (slider_page > mc_c_cot_li.length - 1) {
        slider_page = 0;
    }
    olli[slider_page].className = "sixolli";
    brand_ul[slider_page].style.display = "block";
    mc_c_cot_li[slider_page].style.display = "block";
}

function auto3() {
    slider_page--;
    for (var i = 0; i < mc_c_cot_li.length; i++) {
        mc_c_cot_li[i].style.display = "none";
        brand_ul[i].style.display = "none";
        olli[i].className = "";
    }
    if (slider_page < 0) {
        slider_page = mc_c_cot_li.length - 1;
    }
    olli[slider_page].className = "sixolli";
    brand_ul[slider_page].style.display = "block";
    mc_c_cot_li[slider_page].style.display = "block";
}
//小点划过
olli[0].onmouseover = function () {
    auto3();
}
olli[1].onmouseover = function () {
    auto2();
}
// 左右点击
slider_page_btn[0].onclick = function () {
    auto3();
};
slider_page_btn[1].onclick = function () {
    auto2();
};
// 鼠标移入清除定时器
sc2.onmouseover = function () {
    clearInterval(timer3);
}
sc2.onmouseout = function () {
    timer3 = setInterval(auto2, 3000);
}

// 
// /
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

// 楼层导航
var off = document.getElementById("off");
var off_over = off.getElementsByTagName("div")[0];
var offp = off.getElementsByTagName("p");
var offh6 = off.getElementsByTagName("h6");
var mum;
window.onscroll = function () {
    for (var i = 0; i < offp.length; i++) {
        offp[i].style.color = "";
    }
    var aa = document.documentElement.scrollTop;
    // console.log(aa);
    if (aa >= 7000) {
        off.style.display = "none";
    }
    if (aa >= 6400) {
        offp[6].style.color = "red";
    } else if (aa >= 5600) {
        off.style.display = "block";
        offp[5].style.color = "red";
    } else if (aa >= 4900) {
        off.style.display = "block";
        offp[4].style.color = "red";
    } else if (aa >= 4400) {
        off.style.display = "block";
        offp[3].style.color = "red";
    } else if (aa >= 3800) {
        off.style.display = "block";
        offp[2].style.color = "red";
    } else if (aa >= 3100) {
        off.style.display = "block";
        offp[1].style.color = "red";
    } else if (aa >= 2600) {
        off.style.display = "block";
        offp[0].style.color = "red";
    } else {
        off.style.display = "none";
    }

    for (var i = 0; i < offp.length; i++) {
        offp[i].index = i;
        offp[i].onclick = function () {
            // offp[this.index]
            for (var b = 0; b < offp.length; b++) {
                offp[b].style.color = "";
            }
            aa = 2600 + [this.index] * 720;
            // console.log(aa);
            document.documentElement.scrollTop = aa;
            off.style.display = "block";
            offp[this.index].style.color = "red";
            mum = this.index;
        }
        offh6[0].onclick = function () {
            mum--;
            if (mum == -1) {
                mum = 6
            }
            for (var b = 0; b < offp.length; b++) {
                offp[b].style.color = "";
            }
            aa = 2600 + [mum] * 720;
            // console.log(aa);
            document.documentElement.scrollTop = aa;
            off.style.display = "block";
            offp[mum].style.color = "red";
        }
        offh6[1].onclick = function () {
            mum++;
            if (mum == 7) {
                mum = 0
            }
            for (var b = 0; b < offp.length; b++) {
                offp[b].style.color = "";
            }
            aa = 2600 + [mum] * 720;
            // console.log(aa);
            document.documentElement.scrollTop = aa;
            off.style.display = "block";
            offp[mum].style.color = "red";
        }
    }

}
// 
// 
// 我的国美
var myguomei = document.getElementById("myguomei");
var mycont = document.getElementById("mycont");
var myconti = mycont.getElementsByTagName("i")[0];
mycont.onmouseover = function () {
    myguomei.style.display = "block";
    mycont.style.color = "tomato";
    myconti.style.background = "url(./images/ui.png) -58px -490px";
}
myguomei.onmouseleave = function () {
    myguomei.style.display = "none";
    mycont.style.color = "";
    myconti.style.background = "url(./images/ui.png) -58px -480px";
}
// 
// 企业采购
var myimg = document.getElementById("myimg");
var mytuimg = document.getElementById("mytuimg");
var mytuimgi = mytuimg.getElementsByTagName("i")[0];
mytuimg.onmouseover = function () {
    myimg.style.display = "block";
    mytuimg.style.color = "tomato";
    mytuimgi.style.background = "url(./images/ui.png) -58px -490px";
}
myimg.onmouseleave = function () {
    myimg.style.display = "none";
    mytuimg.style.color = "";
    mytuimgi.style.background = "url(./images/ui.png) -58px -480px";
}
// 
// 搜索框 商品下拉列表
var leftduoxuan = document.getElementById("leftduoxuan");
var leftEm = leftduoxuan.getElementsByTagName("em")[0];
var leftEmp = leftEm.getElementsByTagName("p");
var leftb = leftduoxuan.getElementsByTagName("b")[0];
// 初始化样式
// 
// console.log(leftduoxuan, leftEm, leftEmp);

leftduoxuan.onmouseover = function () {
    leftEm.style.display = "block";
}
leftduoxuan.onmouseleave = function () {
    leftEm.style.display = "none";
}
// 循环添加点击事件
for (var i = 0; i < leftEmp.length; i++) {
    leftEmp[i].index = i;
    // console.log(leftEmp[i].index);
    leftEmp[i].onclick = function () {
        leftb.innerHTML = leftEmp[this.index].innerHTML;
    }
}
// 
// 