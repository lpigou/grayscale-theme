/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        // 51.0579698,3.7450427
        center: new google.maps.LatLng(51.0579698, 3.7450427), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: false,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        // styles:
        // [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"},{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]}]
        // [{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"weight":1}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"weight":0.8}]},{"featureType":"landscape","stylers":[{"color":"#ffffff"}]},{"featureType":"water","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"elementType":"labels.text","stylers":[{"visibility":"on"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"elementType":"labels.icon","stylers":[{"visibility":"on"}]}]
        // styles: [
        // {
        //     "featureType": "water",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 17
        //     }]
        // }, 
        // {
        //     "featureType": "landscape",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 20
        //     }]
        // }, {
        //     "featureType": "road.highway",
        //     "elementType": "geometry.fill",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 17
        //     }]
        // }, {
        //     "featureType": "road.highway",
        //     "elementType": "geometry.stroke",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 29
        //     }, {
        //         "weight": 0.2
        //     }]
        // }, {
        //     "featureType": "road.arterial",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 18
        //     }]
        // }, {
        //     "featureType": "road.local",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 16
        //     }]
        // }, {
        //     "featureType": "poi",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 21
        //     }]
        // }, {
        //     "elementType": "labels.text.stroke",
        //     "stylers": [{
        //         "visibility": "on"
        //     }, {
        //         "color": "#000000"
        //     }, {
        //         "lightness": 16
        //     }]
        // }, {
        //     "elementType": "labels.text.fill",
        //     "stylers": [{
        //         "saturation": 36
        //     }, {
        //         "color": "#000000"
        //     }, {
        //         "lightness": 40
        //     }]
        // }, {
        //     "elementType": "labels.icon",
        //     "stylers": [{
        //         "visibility": "off"
        //     }]
        // }, {
        //     "featureType": "transit",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 19
        //     }]
        // }, {
        //     "featureType": "administrative",
        //     "elementType": "geometry.fill",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 20
        //     }]
        // }, {
        //     "featureType": "administrative",
        //     "elementType": "geometry.stroke",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 17
        //     }, {
        //         "weight": 1.2
        //     }]
        // }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    // var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(51.0579698, 3.7450427);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        // icon: image
    });
}
