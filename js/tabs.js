$(function() {
  $('.tabs').each(function(index) {
    $(this).children('li').first().children('.tabs__link').addClass('tabs__link--active').next().addClass('tabs__content--open').show();
  });
  $('.tabs').on('click', 'li > .tabs__link', function(event) {
    event.preventDefault();
    if (!$(this).hasClass('is-active')) {
      var tabs = $(this).closest('.tabs');
      tabs.find('.tabs__content--open').removeClass('tabs__content--open').hide();
      $(this).next().toggleClass('tabs__content--open').toggle();
      tabs.find('.tabs__link--active').removeClass('tabs__link--active');
      $(this).addClass('tabs__link--active');
    }
    return false;
  });
});
