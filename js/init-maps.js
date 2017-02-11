function initMaps() {
  new google.maps.Map(document.getElementById('map_gymnase'), {
    center: {lat: 48.299158, lng: 4.083403},
    zoom: 18
  });
  new google.maps.Map(document.getElementById('map_dojo'), {
    center: {lat: 48.290960, lng: 4.068032},
    zoom: 18
  });
}
