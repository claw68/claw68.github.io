$(function(){

  var skills = [
    {
      devicon: ['devicon-html5-plain-wordmark', 'colored'],
      level: 100,
    },
    {
      devicon: ['devicon-css3-plain-wordmark', 'colored'],
      level: 97,
    },
    {
      devicon: ['devicon-javascript-plain', 'colored'],
      level: 91,
    },
    {
      devicon: ['devicon-php-plain', 'colored'],
      level: 93,
    },
    {
      devicon: ['devicon-codeigniter-plain-wordmark', 'colored'],
      level: 95,
    },
    {
      devicon: ['devicon-mysql-plain-wordmark', 'colored'],
      level: 87,
    },
  ];

  $.each(skills, function(i, skill) {
    var $template =
      $('<div class="col-sm-1 col-ms-2 col-xs-3 text-center">' +
        '<span class="devicon"></span>' +
      '</div>' +

      '<div class="col-sm-3 col-ms-4 col-xs-9">' +
        '<div class="progress">' +
          '<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
      '</div>');

    $.each(skill.devicon, function(ii, icon){
      $template.find('.devicon').addClass(icon);
    });

    $template.find('.progress .progress-bar-info').attr('aria-valuenow', skill.level);
    $template.find('.progress .progress-bar-info').css('width', skill.level + '%');

    $('#skills').append($template);

    $('#skills').append('<div class="clearfix visible-xs-block"></div>');

    if((i + 1) % 2 === 0) {
      $('#skills').append('<div class="clearfix visible-ms-block"></div>');
    }

    if((i + 1) % 3 === 0) {
      $('#skills').append('<div class="clearfix visible-sm-block"></div>');
    }

  });

});
