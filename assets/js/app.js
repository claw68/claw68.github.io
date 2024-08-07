$(function(){

  var skills = [
    {
      devicon: ['devicon-html5-plain-wordmark', 'colored'],
      level: 100,
    },
    {
      devicon: ['devicon-css3-plain-wordmark', 'colored'],
      level: 99,
    },
    {
      devicon: ['devicon-javascript-plain', 'colored'],
      level: 98,
    },
    {
      devicon: ['devicon-php-plain', 'colored'],
      level: 96,
    },
    {
      devicon: ['devicon-apache-plain-wordmark', 'colored'],
      level: 97,
    },
    {
      devicon: ['devicon-mysql-plain-wordmark', 'colored'],
      level: 96,
    },
    {
      devicon: ['devicon-laravel-plain-wordmark', 'colored'],
      level: 93,
    },
    {
      devicon: ['devicon-bootstrap-plain-wordmark', 'colored'],
      level: 98,
    },
    {
      devicon: ['devicon-codeigniter-plain-wordmark', 'colored'],
      level: 97,
    },
    {
      devicon: ['devicon-sass-original', 'colored'],
      level: 98,
    },
    {
      devicon: ['devicon-foundation-plain-wordmark', 'colored'],
      level: 96,
    },
    {
      devicon: ['devicon-jquery-plain-wordmark', 'colored'],
      level: 97,
    },
    {
      devicon: ['devicon-angularjs-plain-wordmark', 'colored'],
      level: 50,
    },
    {
      devicon: ['devicon-react-original-wordmark', 'colored'],
      level: 50,
    },
    {
      devicon: ['devicon-git-plain-wordmark', 'colored'],
      level: 97,
    },
    {
      devicon: ['devicon-gitlab-plain-wordmark', 'colored'],
      level: 85,
    },
    {
      devicon: ['devicon-docker-plain-wordmark', 'colored'],
      level: 70,
    },
    {
      devicon: ['devicon-amazonwebservices-plain-wordmark', 'colored'],
      level: 75,
    },
    {
      devicon: ['devicon-linux-plain', 'colored'],
      level: 94,
    },
    {
      devicon: ['devicon-ssh-plain-wordmark', 'colored'],
      level: 97,
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
      devicon: ['devicon-tailwindcss-plain-wordmark', 'colored'],
      level: 55,
    },
    {
      devicon: ['devicon-apachekafka-plain-wordmark', 'colored'],
      level: 43,
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

  $.each($('span.moment'), function(i, duration){
    var start = moment($(this).siblings('.start').text(), "MMMM D, YYYY");

    var end;
    if($(this).siblings('.end').text() === 'Present') {
      end = moment().startOf('day');
    } else {
      end = moment($(this).siblings('.end').text(), "MMMM D, YYYY");
    }

    var diff = moment.preciseDiff(start, end);
    var gap = end.diff(start, 'months');
    if(gap >= 1) {
      diff = diff.replace(/\d* day(.|$)/, "");
    }
    $(this).html(diff);
  });

});
