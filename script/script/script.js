$(function(){
    // 레이어팝업
    
    $(".layerPopup").on("click",function(){
       $(".popup").fadeIn();
    });
    $(".close").on("click",function(){
       $(".popup").fadeOut();
    });
 });
 /*
 레이어팝업 클릭시 
 팝업 나타남.
 닫기 클릭시
 팝업 사라짐. */
 
 // .fadeIn(); - 서서히 나타남
 // .fadeOut(); - 서서히 사라짐