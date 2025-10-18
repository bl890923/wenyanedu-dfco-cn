/**
 * Created by Administrator on 2018-07-12.
 */
//导航按钮开始
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
});
//导航按钮结束
//导航1开始
$(function () {
    $(".bx-sj1").click(function () {
        $(".bx-nav-one .bx-nav").toggle("slow");
    });
});
$(function () {
    $(".bx-nav li").hover(function () {
        $(this).find(".bx-nav-fd").stop(true, true).show("slow");
    }, function () {
        $(this).find(".bx-nav-fd").stop(true, true).hide("slow");
    });
})
//999导航1结束
//*********导航2开始*****************

//******导航2结束********

$(function () {

    $(".bx-nav-yz ul li").hover(function () {
        $(this).find(".div-fd").stop(true, true).slideDown();
    }, function () {
        $(this).find(".div-fd").stop(true, true).slideUp();
    })
});


//*********返回顶部*********

$("#returnTop").click(function () {
    var speed = 1000;//滑动的速度
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});
//******返回顶部********



//$('a[href*=#]').click(function () {
//    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//        var $target = $(this.hash);
//        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
//        if ($target.length) {
//            var targetOffset = $target.offset().top;
//            $('html,body').animate({
//                scrollTop: targetOffset
//            }, 900);
//            return false;
//        }
//    }
//});


//*********下拉**********
//var isHover = false;
//$(function () {
//    $(".a").hover(function () {
//        isHover = true;
//        $(".b").show();
//    }, function () {
//        isHover = false;
//        setTimeout(function () {
//            if (!isHover) {
//                $(".b").fadeOut();
//            }
//        }, 10);
//    });
//    $(".b").hover(function () {
//        isHover = true;
//    }, function () {
//        isHover = false;
//        $(".b").fadeOut();
//    });
//});

//********下拉*******

//**************选项卡***********
//$(function () {
//    $(".b_1").hide();
//    var li = document.getElementsByClassName("a_1");
//    var div = document.getElementsByClassName("b_1");
//    for (var x = 0; x < li.length; x++) {
//        li[x].index = x;
//        li[x].onmousemove = function () {
//            div[0].style.display = "block"
//            $(this).addClass("cur").siblings("li").removeClass("cur");
//            for (var b = 0; b < div.length; b++) {

//                div[b].style.display = "none"

//            }
//            div[this.index].style.display = "block"


//        }
//    }
//})
//**********选项卡**********

//***********附着***********
//$(function () {
//    $(window).scroll(function () {
//        var a = $("#index-one-lo").offset().top - $(window).scrollTop();

//        if (a <=0) {
//            $(".index-one-lo").addClass("index-one-lo1")
//        }else(
//             $(".index-one-lo").removeClass("index-one-lo1")

//            )

//    })
//})
//*********附着*********


//*******语音切换********


//var langue = '<%=Session["lang"]%>';
//if (langue == "zh-cn") {
//    $(".yy").removeClass("cur")
//    $(".yy").eq(0).addClass("cur");

//} else {
//    $(".yy").removeClass("cur")
//    $(".yy").eq(1).addClass("cur");

//}

//*********语音切换*********

//***********测导航*********
$(function () {
    $("#bx-side-btn-r").click(function () {
        $(".bx-side-nav2").show();
        $(".bx-side-nav-list2").css("right", "0");
    });
    $(".bx-side-nav2 i").click(function () {
        $(".bx-side-nav2").hide();
        $(".bx-side-nav-list2").css("right", "-260px");
    });
    $(".bx-side-nav2").click(function () {
        $(".bx-side-nav2").hide();
        $(".bx-side-nav-list2").css("right", "-260px");
    });

});


$(function () {
    $("#bx-side-btn-l").click(function () {
        $(".bx-side-nav").show();
        $(".bx-side-nav-list").css("left", "0");
    });
    $(".bx-side-nav i").click(function () {
        $(".bx-side-nav").hide();
        $(".bx-side-nav-list").css("left", "-260px");

    });
    $(".bx-side-nav").click(function () {
        $(".bx-side-nav").hide();
        $(".bx-side-nav-list").css("left", "-260px");

    });

});
//**********测导航*****************

//ul 空数据显示图片
//var a = $("#ul-a  li").length;
//if (a == 0) {
//    $("#ul-a").addClass("nodata-img");
//} else {
//    $("#ul-a").removeClass("nodata-img");
//};
//ul 空数据显示图片
    

// 侧兰
$(function () {
    $(".bx-sideBar li").hover(function () {
        $(this).find(".div-fc").stop(true, true).show("slow");
    }, function () {
        $(this).find(".div-fc").stop(true, true).hide("slow");
    })
})

//侧兰


//*****人才招聘下拉*****
$(document).ready(function () {
    var $submenu = $('.submenu');
    var $mainmenu = $('.mainmenu');
    $submenu.hide();
    $mainmenu.on('click', 'li', function () {

        var bl = 0;
        $(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();

        if ($(this).find(".arrow").attr("class") == "s") {
            $(this).find(".arrow").removeClass("s");
        } else {
            if ($(this).find(".arrow").hasClass("s")) {
                $(".arrow").removeClass("s");
                bl = 1;
            }
            $(".arrow").removeClass("s");
            $(".mainmenu li").removeClass("li")
            if (bl == 0) {
                $(this).find(".arrow").addClass("s");
                $(this).addClass("li")
            }
        }
    });
});

//***人才招聘下拉****


//*****弹窗

$(function () {
    $(".btn-popup").click(function () {
        $(".bx-popup").show();
    })
})
//*****弹窗

//*****键盘属性
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 27) { // 按 Esc 
            //要做的事情
        }
        if (e && e.keyCode == 113) { // 按 F2 
            //要做的事情
        }
        if (e && e.keyCode == 13) { // enter 键
            //要做的事情
            searchkey()
        }
    };
//*****键盘属性

//***ul li 无数据显示****
//var a = $("#ul2  li").length;
//if (a == 0) {
//    $("#ul2 ").addClass("nodata-img");
//} else {
//    $("#ul2 ").removeClass("nodata-img");
//};
//***ul li 无数据显示****


//$(function () {
//    var k = $("#div-k").html().trim().length;

//    if (k == 0) {
//        $("#div-k").addClass("nodata-img");
//    } else {
//        $("#div-k").removeClass("nodata-img");
//    }

//})



//try {
//    var urlhash = window.location.hash;
//    if (!urlhash.match("fromapp")) {
//        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
//            window.location = "/Wap/index.html";
//        }
//    }
//}
//catch (err) {
//}