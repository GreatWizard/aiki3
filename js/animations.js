$(function() {

  var animatorElem = $('.animator');
  console.log(pageSide);
  console.log(isSideIn);

  if (pageSide == "false" && isSideIn) {
    animatorElem.animate({'margin-left': '-240px'});
    window.localStorage.setItem("isVisibleSide", false);
  } else if (pageSide == "true" && !isSideIn) {
    animatorElem.animate({'margin-left': '0px'});
    window.localStorage.setItem("isVisibleSide", true);
  }

});
