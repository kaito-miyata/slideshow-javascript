document.addEventListener('DOMContentLoaded',()=>{

  var slideWrapper = document.getElementById('slide__wrapper');
  var slideItem = document.getElementsByClassName('slide__item');
  var IntervalTime = 2000;
  var currentSlideNum = 0;
  var FadeTime =1000;

  // １枚目のスライドにapperとzoomを追加
  slideItem[0].classList.add('appear');


  // 画像の表示、削除、切り替えをIntervalTimeおきで繰り返す
  // setInterval(やること,間隔)
  setInterval(function(){


    // 最後のslideItemではないかどうかによって処理を変える
  // 　最後のslideItemじゃないとき
    if (currentSlideNum < slideItem.length - 1) {
      // ①現在のslideItemのappearを削除
      // slideItem[currentSlideNum].classList.remove('appear');
      nextSlideNum = currentSlideNum +1;
      slideItem[currentSlideNum].classList.remove('appear','zoom');
      slideItem[nextSlideNum].classList.add('appear');

      setTimeout(()=>{
        slideItem[currentSlideNum].classList.remove('zoom')
      },2000);

        currentSlideNum = nextSlideNum;
      // ②次の画像をzoomしながら表示する
      // slideItem[currentSlideNum].classList.add('appear','zoom');
    } else {
      // ①現在のslideItemのappearを削除
      // slideItem[currentSlideNum].classList.remove('appear');
      // ②次の画像（最後の画像）をzoomしながら表示する
      nextSlideNum = 0;
      slideItem[currentSlideNum].classList.remove('appear','zoom');
      slideItem[nextSlideNum].classList.add('appear');

      setTimeout(()=>{
        slideItem[currentSlideNum].classList.remove('zoom')
      },4000);

      currentSlideNum = nextSlideNum;
      // slideItem[currentSlideNum].classList.add('appear','zoom');

    }


  },IntervalTime)
});
