/* __________________Splash________________*/
$(function() {
  setTimeout(function() {
    $('#splash').fadeOut();
    $('#principal-header').removeClass('hide');
    $('#principal-body').removeClass('hide');
    $('#principal-content').removeClass('hide');
  }, 3500);
});

/*__________________MAPA________________*/
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397,
    lng: 150.644},
    zoom: 15
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}
// Jalando Data de los restaurantes
var container = $('#restaurant');
var modal = $('.modal');
// Función que muestra todos los restaurantes
function restaurants() {
  for (i = 0; i < data.length; i++) {
    //container.append('<div class="col-xs-5 col-md-2 box-restaurant" data-name="' + availableFood[i].name + '" data-type="' + availableFood[i].type + '" data-city="' + availableFood[i].address + '" data-toggle="modal" data-target="#myModal" ><p class="name-restaurant">' + availableFood[i].name + '</p><img class="img-restaurant"  src=' + availableFood[i].image + '><div class="opacity"></div> </div>');
    var box = $( "<div></div>");
    box.addClass('col-xs-5 col-md-2 box-restaurant');
    box.attr('data-name', data[i].name);
    box.attr('data-toggle', 'modal');
    box.attr('data-target', '.bs-example-modal-lg');
    container.append(box);

    var texto = $( "<p></p>");
    texto.addClass('name-restaurant');
    texto.text(data[i].name);
    box.append(texto);

    var image = $( "<img/>");
    image.addClass('img-restaurant img-responsive img-thumbnail');
    image.attr('src', data[i].image);
    box.append(image);

    var opacityBox = $( "<div></div>");
    opacityBox.addClass('opacity');
    box.append(opacityBox);
  }
}
// Llamando a la función para al iniciar
restaurants();

// Funcion Mouseover sobre la imagen
$(document).ready(function(){
  $('.opacity').mouseover(function() {
    $(this).css('background', 'rgba(0, 0, 0, 0)');
  });
  $('.opacity').mouseout(function() {
    $(this).css('background', 'rgba(0, 0, 0, 0.5)');
  });
});


// FILTRO
$('#food').keyup(function() {
  var restaurantName = $('#food').val();
  if (restaurantName == '') {
    $('#restaurant').show();
  } else if (restaurantName) {
    $('#restaurant').hide();
  }
});

// Contenido Modal
$('.box-restaurant').on('click', function() {
  for (i = 0; i < data.length; i++) {
    if ($(this).data('name') === data[i].name) {
      $('.title-modal').text(data[i].name);
      $('.restaurant-foto').attr('src', data[i].local);
      $('.district-restaurant').text(data[i].district);
      $('.address-restaurant').text(data[i].address);
      $('.price-food').text(data[i].money);
      $('.type-food').text(data[i].type);
    }
  }
});
