function addemoji() {
  const emoji = document.getElementById('selection').value;
  if (emoji) {
      const messageField = document.getElementById('message');
      messageField.value += " " + emoji;
      document.getElementById('selection').selectedIndex = 0;
  }
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
