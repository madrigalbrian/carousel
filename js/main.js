//main js
var photos = ["http://www.essexinn.com/d/essexinn/media/Attractions/3583017878_ee2e8e3d8b_b_1423674445483.jpg", "http://www.bekinsmovingandstorage.com/wp-content/uploads/2016/03/SeattleCity2.jpg", "http://cdn.moneycrashers.com/wp-content/uploads/2016/06/portland-oregon-view-918x516.jpg", "https://cdn1.dxstatic.com/dynamicservingassets/desktop/images/info/top-cities/San%20Francisco,%20CA.jpg", "http://www3.hilton.com/resources/media/hi/LAXAHHH/en_US/img/shared/full_page_image_gallery/main/HH_hollywoodsign_20_1270x560_FitToBoxSmallDimension_Center.jpg", "https://comeheretome.files.wordpress.com/2011/01/sandiego.jpg"];
var totalCount = 0;

$("#left").on("click", function(){
  if (totalCount == photos.length - 1){
    totalCount = 0;
  } else {
    totalCount ++;
  }
  $("img").attr("src", photos[totalCount]);
});

$("#right").on("click", function(){
  //if at any point totalCount is 8, reset it back to 0
  if (totalCount == 0){
    totalCount = photos.length;
  } else {
    //if totalCount is not at 8 just add 1
    totalCount --;
  }
  //target the image and change the attribute source in html
  $("img").attr("src", photos[totalCount]);
});
