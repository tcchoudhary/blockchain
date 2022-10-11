
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};


var countDownDate = new Date("Jan 5, 2023 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "<P></p>" + hours + " <p></p>"
  + minutes + " <p> </p>" + seconds + " <p> </p>";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



     var modal = document.getElementById('id01');
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     };
     var modal = document.getElementById('01');
     window.onclick = function(event) {
         if (event.target == reg) {
             modal.style.display = "none";
         }
     };


    //  let mybutton = document.getElementById("myBtn");
    //  window.onscroll = function() {scrollFunction()};
     
    //  function scrollFunction() {
    //    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //      mybutton.style.display = "block";
    //    } else {
    //      mybutton.style.display = "none";
    //    }
    //  }
     
    //  function topFunction() {
    //    document.body.scrollTop = 0;
    //    document.documentElement.scrollTop = 0;
    //  };

    document.querySelector('.cross').style.display = 'none';
document.querySelector('.icon').addEventListener("click", ()=>{
    document.querySelector('.navbar').classList.toggle("navgo");
    if(document.querySelector('.navbar').classList.contains("navgo")){
        document.querySelector('.hum').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.hum').style.display = 'none';
        document.querySelector('.cross').style.display = 'inline';
    }
})