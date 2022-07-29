//gnav
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//gazou 
let imglist = document.querySelectorAll(".itemimg");
let imgmain = document.querySelector(".imgbox img");
for(let i=0;i<imglist.length;i++){
    imglist[i].addEventListener("click",function(){
        let code = imglist[i].getAttribute("src");
        imgmain.setAttribute("src",code)
        
    })
}
//jquery rensyu
//btn
var show = 6,
     add = 4, 
     target = '.target',
     btn = $('.btn');
 $(target + ':nth-child(n + ' + (show + 1) + ')').addClass('hidden');

 btn.on('click', function () {
   $(target + '.hidden').slice(0, add).removeClass('hidden');
  
   if ($(target + '.hidden').length == 0) {
     btn.fadeOut();
   }
 });
