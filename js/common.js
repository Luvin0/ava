$(document).ready(function(){
  $('.reviews__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    variableWidth:true,
    centerMode:true,
  });
});

		
let acc = document.getElementsByClassName("response__accordion-items-btn");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.header__nav,.header__burger-span').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


let marketing__btn = document.getElementById("marketing__btn");
  marketing__btn.addEventListener('click', function() {
    swal({
      title: "Ticket received!",
      text: "Thank you",
      icon: "success",
    });
 });

let form__btn = document.getElementById("form__btn");
  form__btn.addEventListener('click', function() {
    swal({
      title: "Message sent!",
      text: "Wait. We will contact you soon.",
      icon: "success",
    });
 });

let about__btn = document.getElementById("about__btn");
  about__btn.addEventListener('click', function() {
    swal("Enter your email", {
      content: "input",
      buttons: {
        catch: {
          text: "Send",
          value: "catch",
        },
        cancel: "Cancel",
      }
    })
    .then((value) => {
      switch (value) {
     
        case "catch":
          swal("More information has been sent to your email.", "Check your mail.", "success");
          break;
     
        // default:
        //   swal("Got away safely!");
      }
  });
});
