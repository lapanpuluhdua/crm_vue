
// Append settings
$.ajax({
  url: '../../settings.html',
  success: function(result){
    $('body').append(result);
    feather.replace();

    var hasMode = Cookies.get('df-mode');
    if(hasMode) {
      $('head').append('<link id="dfMode" rel="stylesheet" href="../../assets/css/skin.'+hasMode+'.css">')
      $('body').find('.df-mode').each(function(){
        var name = $(this).attr('data-title');
        if(name === hasMode) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      })
    }

    var hasSkin = Cookies.get('df-skin');
    if(hasSkin) {
      $('head').append('<link id="dfSkin" rel="stylesheet" href="../../assets/css/skin.'+hasSkin+'.css">')
      $('body').find('.df-skin').each(function(){
        var name = $(this).attr('data-title');
        if(name === hasSkin) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      })
    }

    // Template Customizer
    $('body').on('click', '#dfSettingsShow', function(e){
      e.preventDefault()

      $('.df-settings').toggleClass('show');
    })

    $('body').on('click', '.df-mode', function(e){
      e.preventDefault();

      $(this).parent().siblings().find('.df-mode').removeClass('active');
      $(this).addClass('active');

      var mode = $(this).attr('data-title');

      if(mode === 'dark') {
        darkMode();
      } else {
        lightMode();
      }

      if(mode === 'classic') {
        $('#dfMode').remove();

        Cookies.remove('df-mode');
      } else {

        if($('#dfMode').length === 0) {
          if($('#dfSkin').length === 0) {
            $('head').append('<link id="dfMode" rel="stylesheet" href="../../assets/css/skin.'+mode+'.css">');
          } else {
            $('<link id="dfMode" rel="stylesheet" href="../../assets/css/skin.'+mode+'.css">').insertBefore($('#dfSkin'));
          }
        } else {
          $('#dfMode').attr('href', '../../assets/css/skin.'+mode+'.css');
        }

        Cookies.set('df-mode', mode);
      }
    })

    $('body').on('click', '.df-skin', function(e){
      e.preventDefault();

      $(this).parent().siblings().find('.df-skin').removeClass('active');
      $(this).addClass('active');

      var skin = $(this).attr('data-title');

      if(skin === 'default') {
        $('#dfSkin').remove();

        Cookies.remove('df-skin');
      } else {

        if($('#dfSkin').length === 0) {
          $('head').append('<link id="dfSkin" rel="stylesheet" href="../../assets/css/skin.'+skin+'.css">')
        } else {
          $('#dfSkin').attr('href', '../../assets/css/skin.'+skin+'.css');
        }

        Cookies.set('df-skin', skin);
      }

    })

    $('body').on('click', '#setFontRoboto', function(e){
      e.preventDefault()
      $('body').addClass('df-roboto')
      $(this).addClass('active');
      $('#setFontBase').removeClass('active');
    })

    $('body').on('click', '#setFontBase', function(e){
      e.preventDefault()
      $('body').removeClass('df-roboto');
      $(this).addClass('active');
      $('#setFontRoboto').removeClass('active');
    })
  }
});

var ctxLabel = ['6am', '10am', '1pm', '4pm', '7pm', '10pm'];
var ctxData1 = [20, 60, 50, 45, 50, 60];
var ctxData2 = [10, 40, 30, 40, 55, 25];

// Bar chart
// var ctx1 = document.getElementById('chartBar1').getContext('2d');
// var chartBar = new Chart(ctx1, {
// type: 'horizontalBar',
// data: {
//   labels: ctxLabel,
//   datasets: [{
//     data: ctxData1,
//     backgroundColor: '#69b2f8'
//   }, {
//     data: ctxData2,
//     backgroundColor: '#d1e6fa'
//   }]
// },
// options: {
//   maintainAspectRatio: false,
//   responsive: true,
//   legend: {
//     display: false,
//     labels: {
//       display: false
//     }
//   },
//   scales: {
//     yAxes: [{
//       gridLines: {
//         display: false
//       },
//       ticks: {
//         display: false,
//         beginAtZero: true,
//         fontSize: 10,
//         fontColor: '#182b49'
//       }
//     }],
//     xAxes: [{
//       gridLines: {
//         display: true,
//         color: '#eceef4'
//       },
//       barPercentage: 0.6,
//       ticks: {
//         beginAtZero: true,
//         fontSize: 10,
//         fontColor: '#8392a5',
//         max: 80
//       }
//     }]
//   }
// }
// });


window.darkMode = function() {
  $('.btn-white').addClass('btn-dark').removeClass('btn-white');

  //console.log(chartBar.options.scales);
  // chartBar.options.scales.xAxes[0].gridLines.color = 'rgba(255,255,255,.04)';
  // chartBar.options.scales.xAxes[0].ticks.minor.fontColor = '#97a3b9';
  // chartBar.options.scales.yAxes[0].ticks.minor.fontColor = '#97a3b9';
  // chartBar.update();
}

window.lightMode = function() {
  $('.btn-dark').addClass('btn-white').removeClass('btn-dark');
}

var hasMode = Cookies.get('df-mode');
if (hasMode === 'dark') {
  darkMode();
} else {
  lightMode();
}