$(document).ready(function(){
  mapboxgl.accessToken = 'pk.eyJ1IjoidGtoYW4iLCJhIjoiY2l1bXphNjNnMDBiOTJ2cGVkYzFoN3VsOSJ9.ZKPqz-Dt5nbzEXDyIgWJrQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
  });
});
