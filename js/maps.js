  function initMap() {
    var mapDiv = document.getElementById('map1Column');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 40.744523, lng: -73.995689},
        zoom: 13,
        scrollwheel: false
    });

    var mapDiv = document.getElementById('mapFullWidth');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 40.744523, lng: -73.995689},
        zoom: 13,
        scrollwheel: false
    });

    var mapDiv = document.getElementById('mapFullScreen');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 40.744523, lng: -73.995689},
        zoom: 13,
        scrollwheel: false
    });
  }