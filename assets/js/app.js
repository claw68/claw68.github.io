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
    {
      devicon: ['devicon-foundation-plain-wordmark', 'colored'],
      level: 96,
    },
    {
      devicon: ['devicon-bootstrap-plain-wordmark', 'colored'],
      level: 95,
    },
    {
      devicon: ['devicon-jquery-plain-wordmark', 'colored'],
      level: 93,
    },
    {
      devicon: ['devicon-git-plain-wordmark', 'colored'],
      level: 90,
    },
    {
      devicon: ['devicon-amazonwebservices-plain-wordmark', 'colored'],
      level: 54,
    },
    {
      devicon: ['devicon-linux-plain', 'colored'],
      level: 78,
    },
    {
      devicon: ['devicon-rails-plain-wordmark', 'colored'],
      level: 32,
    },
    {
      devicon: ['devicon-python-plain-wordmark', 'colored'],
      level: 34,
    },
    {
      devicon: ['devicon-sklearn-plain-original'],
      level: 37,
    },
    {
      devicon: ['devicon-laravel-plain-wordmark', 'colored'],
      level: 85,
    },
    {
      devicon: ['devicon-sass-original', 'colored'],
      level: 97,
    },
    {
      devicon: ['devicon-apache-plain-wordmark', 'colored'],
      level: 90,
    },
    {
      devicon: ['devicon-react-original-wordmark', 'colored'],
      level: 50,
    },
    {
      devicon: ['devicon-angularjs-plain-wordmark', 'colored'],
      level: 50,
    },
    {
      devicon: ['devicon-docker-plain-wordmark', 'colored'],
      level: 45,
    },
    {
      devicon: ['devicon-ssh-plain-wordmark', 'colored'],
      level: 90,
    },
    {
      devicon: ['devicon-gitlab-plain-wordmark', 'colored'],
      level: 85,
    },
    {
      devicon: ['devicon-webpack-plain-wordmark', 'colored'],
      level: 75,
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

      if(icon === "devicon-sklearn-plain-original") {
        $template.find('.devicon').html('<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>');
      }

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
