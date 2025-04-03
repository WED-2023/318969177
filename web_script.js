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
  let counterElement = document.getElementById("counter");
  let likeImage = document.getElementById("likeImage");

  likeImage.style.display = "block";
  counterElement.style.display = "none";

  // Hide image and show number after 0.4 sec
  setTimeout(() => {
      likeImage.style.display = "none";
      counterElement.style.display = "inline"; 
      counterElement.innerText = count;
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
