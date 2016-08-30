  function initMap() {
    var mapDiv = document.getElementById('map1Column');
    var map1 = new google.maps.Map(mapDiv, {
        center: {lat: 40.744523, lng: -73.995689},
        zoom: 13,
        scrollwheel: false
    });

    var mapDiv = document.getElementById('mapFullWidth');
    var map2 = new google.maps.Map(mapDiv, {
        center: {lat: 40.744523, lng: -73.995689},
        zoom: 13,
        scrollwheel: false
    });

    var mapDiv = document.getElementById('mapFullScreen');
    var map3 = new google.maps.Map(mapDiv, {
        center: {lat: 40.744523, lng: -73.995689},
        zoom: 13,
        scrollwheel: false
    });

    var marker1 = new google.maps.Marker({
      position: {lat: 40.744523, lng: -73.995689},
      map: map1,
      title: 'human'
    });

    var marker2 = new google.maps.Marker({
      position: {lat: 40.744523, lng: -73.995689},
      map: map2,
      title: 'human'
    });

    var marker3 = new google.maps.Marker({
      position: {lat: 40.744523, lng: -73.995689},
      map: map3,
      title: 'human'
    });
  }