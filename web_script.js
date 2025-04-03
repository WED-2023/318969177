function addemoji() {
  const emoji = document.getElementById('selection').value;
  if (emoji) {
      const messageField = document.getElementById('message');
      messageField.value += " " + emoji;
      document.getElementById('selection').selectedIndex = 0;
  }
}
let count = 0;

function morelikes() {
  count++;
  let countr = document.getElementById("counter");
  let img = document.getElementById("likeImage");

  img.style.display = "block";
  countr.style.display = "none";

  // Hide image and show number after 0.4 sec
  setTimeout(() => {
      img.style.display = "none";
      countr.style.display = "inline"; 
      countr.innerText = count;
  }, 400);
}


$(function(){
  $("#nav a").click(function(e){
      e.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash); 
  });
});

$(document).scroll(function() {
  $('#menu').toggle($(this).scrollTop() > 1000);
});
