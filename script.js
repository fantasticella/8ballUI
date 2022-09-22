jQuery(document).ready(function(){
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    })

    $('.logo-wrap').hover(
        function(){ $('.cursor').toggleClass('border-cursor') }
    )
    $('a').hover(
        function(){ $('.cursor').toggleClass('border-cursor') }
    )
    $('.social-contact a').hover(
        function(){ $(this).addClass('follow-link') },
        function(){ $(this).removeClass('follow-link') }
    )
  
    const cursor2 = document.querySelector('.follow-link');
    document.addEventListener('mousemove', (e) => {
        cursor2.style.left = e.clientX + 'px';
        cursor2.style.top = e.clientY + 'px';
    })

    $('.menu-title').click(function(){
        $('.header-menu').toggleClass('show-menu');
    });

    var myElement = document.getElementById("image"),
    imgList = [
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    ];
    function changeImage(myElement, imgList){
        setInterval(function () {
            randomImage = Math.floor(Math.random() * imgList.Length);
            myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
        }, 1000);

    }
    changeImage(myElement, imgList);
   
});