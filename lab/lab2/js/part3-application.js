/* =====================
  Lab 2, part3: a full application

  We're going to use the skills we've just been practicing to write a full application
  which is responsive to user input.
  At your disposal are a set of variables which we use to track user input (see
  part3-main.js and part3-setup.js for more details on how this is done — we'll
  cover this topic at a later date). Their values will be logged to console to
  aid in debugging.

  In this lab, which is very much open-ended, your task is to use the value of
  these variables to define the functions below. Try to come up with interesting
  uses of the provided user input.

  Some ideas:
    There are two numeric fields: can you write this application to filter
    using both minimum and maximum?
    There is a boolean (true/false) field: can you write your code to filter according
    to this boolean? (Try to think about how you could chop up this data to make this meaningful.)
    There is a string field: can you write your code to filter/search based on user
    input?

  Remember, this is open-ended. Open ended doesn't mean pointless: we're looking for
  filters that might actually be useful. Try to see what you can produce.
===================== */

/* =====================
  Define a resetMap function to remove markers from the map and clear the array of markers
===================== */
var resetMap = function(myMarkers) {
  /* =====================
    Fill out this function definition
  ===================== */
  map.removeLayer(myMarkers);
  markerFiltered = [];
};

/* =====================
  Define a getAndParseData function to grab our dataset through a jQuery.ajax call ($.ajax). It
  will be called as soon as the application starts. Be sure to parse your data once you've pulled
  it down!
===================== */
var getAndParseData = function() {
  /* =====================
    Fill out this function definition
  ===================== */
  dat = $.ajax("https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-crime-snippet.json";).done(
    function(a) {
      myData = JSON.parse(a);
      console.log(myData);
  })
};

var markerFilter = function(list) {
  var markerFiltered = [], i = -1;
  for (i = 0; i < list.length; i++) {
    if (list[i].District >= numericField1 && list[i].District <= numericField2 && list[i][General Crime Category] == stringField && (list[i].PSA == 2) == booleanField) {
      markerFiltered.push(list[i]);
    }
  }
  console.log("Number of crime: " + markerFiltered.length);
  return markerFiltered;
};

/* =====================
  Call our plotData function. It should plot all the markers that meet our criteria (whatever that
  criteria happens to be — that's entirely up to you)
===================== */
var plotData = function() {
  /* =====================
    Fill out this function definition
  ===================== */
  myMarkers = _.each(markerFilter(myData), (datum) => {
    L.marker([datum.Lat, datum.Lng])
    .addTo(map)
    .bindPopup("<b>" + datum['Location Block'] + "</b>");
  });
};
