// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function() {
  $quakesList = $('#info');
  var source = $('#quakes-template').html();
  template = Handlebars.compile(source);
  renderEarthQuakes();

  createMap();
  fetchQuakeData();

});
function renderEarthQuakes(){
  $.ajax({
    url: weekly_quakes_endpoint,
    method: "GET",
    data: $('').serialize(),
    success: displayEarthQuakes,
    error: handleError,

});
}

function displayEarthQuakes(json){
  console.log(json.features);
  var string = template({ earthquakes: json.features});

  $(".list").append(string);

}

function handleError(xhr,status,errorThrown){
  console.log(xhr);

}
