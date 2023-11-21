$(document).ready(function () {
  // Scroll down sticky navbar script start
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }


    // Scroll up Button script start    
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }


    // Fade In & Fade Out Elements on Scroll script start
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
    });
  });
  // Scroll up Button script start
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // Scroll up Button script end

  // Typing animation script start
  var typed = new Typed(".typing", {
    strings: ["React.js Developer", "Front End Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: ["React.js Developer", "Front End Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // toggle menu/navbar script start
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // toggle menu/navbar script end

  // owl carousel script start
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // owl carousel script end
});

//  Greeting Messages for Home Page------>
function displayGreeting () {
  const now = new Date ();
  const hour = now.getHours();
  let greeting;
  if(hour >= 5 && hour < 12){
    greeting = 'Good Morning';
  }else if (hour >= 12 && hour <17){
    greeting = 'Good Afternoon';
  }else if (hour >= 17 && hour <20 ){
    greeting = 'Good Evening';
  }else {
    greeting = 'Good Night';
  }
  const greetingElement = document.getElementById('greeting');
  greetingElement.textContent = greeting;
}
displayGreeting();
setInterval(displayGreeting, 60000);





