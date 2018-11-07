
//显示导航栏
$(".header-tooger").click(function(){
    $(".collapse").stop().slideToggle(500)
})
//点击导航栏（有下拉菜单的导航 2、3、4）
$(".change").each(function(){
    let menu=$(this);
    $(this).click(function(){
        $(this).next(".dropdown-menu").toggle()//让当前导航的下拉菜单显示
       // $(this).not($(".expl")).toggleClass("changeCss")//点击后给加背景色
        $(".disnone").not($(this).next(".dropdown-menu")).css({display:"none"})//让其他所有的同类导航的下拉菜单消失（除了当前点击的）
       // $(".disnone").prev().not($(this)).removeClass("changeCss")//让其他点过的导航背景色消失（除了当前的导航）
    })
})
//图片input的点击
$(".imagecheck-image").each(function(){
    $(this).click(function(){
        $(this).parent().parent().toggleClass("changeColor");//让最外层（label）的边框显示
        //$(this).parent().toggleClass("changeBorderColor")
    })
});
//收缩内容
$(".card-options-collapse").each(function(){
    $(this).click(function(){
        $(this).children("i").toggleClass("rotate");
        $(this).parent().parent().nextAll().stop().slideToggle("fast");
    })
});
//关闭
$(".card-options-remove").each(function(){
    $(this).click(function(){
        $(this).parent().parent().parent().parent().toggle();
    })
})