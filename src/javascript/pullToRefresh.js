var lastScrollPosition = 0;
window.onscroll = function(event)
{
  if((document.body.scrollTop >= 0) && (lastScrollPosition < 0))
  {
    alert("refresh");
  }
  lastScrollPosition = document.body.scrollTop;
}